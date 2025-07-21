import { Document } from '../../services/markdown/types.ts';
import { sanitizeTitle } from './sanatize-title.ts';

/**
 * Generates a table of contents for a document.
 * @param document The document to generate the table of contents for.
 * @param depth The current depth in the document structure.
 * @param maxDepth The maximum depth to generate the table of contents for.
 * @returns An array of strings representing the table of contents.
 */
export const generateTableOfContentLines = (
  document: Document,
  depth: number = 0,
  maxDepth: number = 3,
): string[] => {
  if (depth > maxDepth) {
    return []; // Prevent unnecessary recursion
  }

  const tableOfContent: string[] = [];

  if (!document.title) {
    throw new Error('Document title is missing');
  }

  tableOfContent.push(
    `${'  '.repeat(depth)}- [${document.title}](#${sanitizeTitle(document.title)})`,
  );

  if (document.sections && Array.isArray(document.sections)) {
    for (const section of document.sections) {
      tableOfContent.push(
        ...generateTableOfContentLines(section, depth + 1, maxDepth),
      );
    }
  }

  return tableOfContent;
};
