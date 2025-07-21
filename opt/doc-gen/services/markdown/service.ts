import { existsSync } from 'jsr:@std/fs/exists';
import { endMarker, findMarkers, MARKER_COMMENT, startMarker } from './markers.ts';
import { Document, DocumentStack, UpdateSectionOptions } from './types.ts';

/**
 * Interface representing the options for the MarkdownService.
 * @interface MarkdownServiceOptions
 * @property {string} [filePath] - The path to the markdown file.
 * @property {string} [content] - The content of the markdown file.
 * @property {boolean} [verbose] - Whether to enable verbose output.
 */
interface MarkdownServiceOptions {
  filePath?: string;
  content?: string;
  verbose?: boolean;
}

/**
 * MarkdownService is a class that provides methods to read, write, and manipulate
 * markdown files. It can parse the content of a markdown file into a structured
 * object and update specific sections of the file.
 */
export class MarkdownService {
  private _filePath: string;
  private _content: string;
  private _verbose: boolean;

  constructor(options: MarkdownServiceOptions = {}) {
    this._filePath = options.filePath ?? 'README.md';
    this._content = options.content ?? '';
    this._verbose = options.verbose ?? false;
  }

  /**
   * Get the file path of the markdown file
   * @returns {string} The file path of the markdown file
   */
  public get filePath(): string {
    return this._filePath;
  }

  /**
   * Get the content of the markdown file
   * @returns {string} The content of the markdown file
   */
  public get content(): string {
    if (this._content.length === 0) {
      this._content = this.readFromFile(this._filePath);
    }

    return this._content;
  }

  /**
   * Set the content of the markdown file
   * @param {string} newContent The new content to set
   */
  public set content(newContent: string) {
    this._verbose &&
      console.log(
        `Updating content of ${this._filePath} with new content`,
        newContent,
      );
    this._content = newContent;
  }

  // Helper function to recursively remove empty sections
  private _cleanEmptySections = (section: Document) => {
    if (section.sections) {
      section.sections = section.sections.filter((subSection) => {
        this._cleanEmptySections(subSection);
        return (subSection.sections && subSection.sections?.length > 0) ||
          subSection.content.trim() !== '';
      });

      if (section.sections.length === 0) {
        delete section.sections;
      }
    }
  };

  private _flushContent(section: Document, currentContent: string[]): void {
    if (currentContent.length > 0) {
      section.content = currentContent.join('\n').trim();
      currentContent.length = 0; // Clear the array
    }
  }

  /**
   * Returns the content of the file as an object representing the hierarchy of the content.
   * The object will have the following structure:
   * ```json
   * {
   *   "title": "document title",
   *   "content": "document content",
   *   "sections": [
   *     {
   *       "title": "section A title",
   *       "content": "section A content",
   *       "sections": [
   *         {
   *           "title": "subsection A1 title",
   *           "content": "subsection A1 content",
   *         },
   *         {
   *           "title": "subsection A2 title",
   *           "content": "subsection A2 content",
   *         }
   *       ],
   *     },
   *     {
   *       "title": "section B title",
   *       "content": "section B content",
   *       "sections": [
   *         {
   *           "title": "subsection B1 title",
   *           "content": "subsection B1 content",
   *         },
   *       ],
   *     },
   *     ...
   *   ]
   * }
   * ```
   * @returns {Document} The structured content of the file.
   */
  public get document(): Document {
    const lines = this._content.split('\n');
    const root: Document = { title: '', content: '', sections: [] };
    const stack: DocumentStack[] = [{
      level: 0,
      section: root,
    }];

    const currentContent: string[] = [];

    for (const line of lines) {
      const match = line.match(/^(#+)\s+(.*)$/);
      if (match) {
        const level = match[1].length; // Number of '#' characters
        const title = match[2].trim();

        // Flush content to the current section
        this._flushContent(stack[stack.length - 1].section, currentContent);

        // Create a new section
        const newSection: Document = { title, content: '', sections: [] };

        // Find the correct parent for this section
        while (stack.length > 0 && stack[stack.length - 1].level >= level) {
          stack.pop();
        }

        // Add the new section to the parent's sections
        stack[stack.length - 1]?.section?.sections?.push(newSection);

        // Push the new section onto the stack
        stack.push({ level, section: newSection });
      } else {
        // Accumulate content for the current section
        currentContent.push(line);
      }
    }

    // Flush remaining content to the last section
    this._flushContent(stack[stack.length - 1].section, currentContent);

    // Set the root title and content
    if (root.sections && root.sections.length > 0) {
      root.title = root.sections[0].title;
      root.content = root.sections[0].content;
      root.sections = root.sections[0].sections;
    }

    // Clean up the root sections
    this._cleanEmptySections(root);

    return root;
  }

  private _newSection(newSection: string, marker: string): string {
    return [
      startMarker(marker),
      MARKER_COMMENT,
      ...newSection.split('\n'),
      endMarker(marker),
    ].join('\n');
  }

  /**
   * Updates the section in the content.
   * @param {string} newSection - The new section to update.
   * @param {UpdateSectionOptions} options - The options for updating the section.
   */
  public updateSection(
    newSection: string,
    options: UpdateSectionOptions,
  ): void {
    const { marker, forceTop } = options;

    if (!this._content) {
      this._verbose &&
        console.log('Content is empty. Initializing with new content.');
      this._content = this._newSection(newSection, marker);
      return;
    }

    this._verbose && console.log('Updating section with new content');

    const contentLines = this._content.split('\n');
    const { startIndex, endIndex } = findMarkers(
      contentLines,
      { marker },
    );

    const newSectionLines = this._newSection(newSection, marker).split('\n');

    this._verbose && console.log('New section lines:', newSectionLines);

    if (startIndex && endIndex) {
      this._verbose &&
        console.log('Both START and END markers are set. Replacing section.');
      // If both start and end flags are set, replace the section
      contentLines.splice(
        startIndex,
        endIndex - startIndex + 1,
        ...newSectionLines,
      );
    } else if (startIndex && !endIndex) {
      this._verbose &&
        console.log('Only START marker is set. Replacing section.');
      // If only the start flag is set, replace START marker with the new section
      contentLines.splice(startIndex, 1, ...newSectionLines);
    } else if (!startIndex && endIndex) {
      this._verbose &&
        console.log('Only END marker is set. Replacing section.');
      // If only the end flag is set, replace END marker with the new section
      contentLines.splice(endIndex, 1, ...newSectionLines);
    } else if (!startIndex && !endIndex) {
      // If neither flag is set, add the new section at either the end or the top
      if (forceTop) {
        this._verbose &&
          console.log(
            'Neither START nor END markers are set. Prepending section.',
          );
        contentLines.unshift(...newSectionLines, '');
      } else {
        this._verbose &&
          console.log(
            'Neither START nor END markers are set. Appending section.',
          );
        contentLines.push('', ...newSectionLines);
      }
    }

    this._content = contentLines.join('\n');
    this._verbose && console.log('Section updated successfully');
  }

  /**
   * Reads the content from a file.
   * @param {string} filePath - The path to the file.
   * @returns {string} The content of the file.
   */
  public readFromFile(filePath: string): string {
    const content = Deno.readFileSync(filePath);
    const decoder = new TextDecoder('utf-8');

    return decoder.decode(content);
  }

  /**
   * Saves the content to a file.
   * @param {string} filePath - The path to the file.
   * @param {boolean} override - Whether to override the file if it exists.
   */
  public saveToFile(
    options: { filePath?: string; override?: boolean } = {},
  ): void {
    const filePath = options.filePath || this._filePath;
    const override = options.override || false;

    this._verbose && console.log(`Saving content to ${filePath}`);
    const content = this._content;

    if (existsSync(filePath) && !override) {
      this._verbose && console.error(
        `README.md file already exists in ${name}.`,
      );
      return;
    }

    Deno.writeTextFileSync(filePath, content);
  }

  /**
   * Creates a new instance of MarkdownService from a file.
   * @param {string} filePath - The path to the file.
   * @param {object} options - The options for the service.
   * @param {boolean} [options.verbose] - Whether to enable verbose output.
   * @returns {MarkdownService} A new instance of MarkdownService.
   */
  public static fromFile(
    filePath: string,
    { verbose }: { verbose?: boolean } = {},
  ): MarkdownService {
    const content = Deno.readFileSync(filePath);
    const decoder = new TextDecoder('utf-8');

    return new MarkdownService({
      filePath,
      content: decoder.decode(content),
      verbose,
    });
  }
}
