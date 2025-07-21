import { MarkdownService } from '../../services/markdown/service.ts';
import { generateTableOfContentLines } from './generate-toc-lines.ts';

/**
 * Updates the table of contents in the README file.
 *
 * This function generates a new table of contents based on the current
 * document structure and updates the README file accordingly. The new
 * table of contents replaces the existing section marked with the
 * specified marker.
 *
 * @param {MarkdownService} readmeService - A service that handles the
 * manipulation of the README file, including updating sections and saving changes.
 */
export const updateTableOfContent = (
  readmeService: MarkdownService,
): void => {
  const newTableOfContent = generateTableOfContentLines(
    readmeService.document,
  ).join('\n');

  readmeService.updateSection(newTableOfContent, {
    marker: 'table-of-content',
  });
  readmeService.saveToFile();
};
