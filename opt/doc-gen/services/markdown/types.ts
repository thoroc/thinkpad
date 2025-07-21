export type FunctionMatcher = (line: string) => boolean;

export interface LineMatchers {
  matchesStart: FunctionMatcher;
  matchesEnd: FunctionMatcher;
}

/**
 * The `ParseOptions` interface defines the options for parsing a document.
 * @interface ParseOptions
 * @property {string} marker - The marker used to identify sections in the document.
 */
export interface ParseOptions {
  marker: string;
}

/**
 * The `ParseResult` interface defines the result of a parsing operation.
 * @interface ParseResult
 * @property {number} [startIndex] - The starting index of the parsed section.
 * @property {number} [endIndex] - The ending index of the parsed section.
 */
export interface ParseResult {
  startIndex?: number;
  endIndex?: number;
}

/**
 * The `UpdateSectionOptions` interface extends the `ParseOptions` interface
 * and adds an optional `forceTop` property.
 * @interface UpdateSectionOptions
 * @property {boolean} [forceTop] - If set to true, the section will be forced to the top of the document.
 */
export interface UpdateSectionOptions extends ParseOptions {
  forceTop?: boolean;
}

/**
 * The `Document` interface represents a document structure.
 * @interface Document
 * @property {string} title - The title of the document.
 * @property {string} content - The content of the document.
 * @property {Document[]} [sections] - An optional array of sections within the document.
 * Each section is represented as a `Document` object, allowing for nested documents.
 */
export interface Document {
  title: string;
  content: string;
  sections?: Document[];
}

export interface DocumentStack {
  level: number;
  section: Document;
}
