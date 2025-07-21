import * as changeCase from 'npm:change-case';
import { LineMatchers, ParseOptions, ParseResult } from './types.ts';

/**
 * lineMatchers is a function that returns an object containing two functions:
 * matchesStart and matchesEnd. These functions are used to check if a given line
 * starts with a specific marker.
 *
 * @param {string} marker - The marker to check against.
 * @returns {LineMatchers} An object containing the two functions.
 */
export const lineMatchers = (
  marker: string,
): LineMatchers => {
  const matchesStart = (line: string) => line.startsWith(`<!-- START ${marker}`);
  const matchesEnd = (line: string) => line.startsWith(`<!-- END ${marker}`);

  return { matchesStart, matchesEnd };
};

/**
 * Finds the start and end markers in the content.
 * @param {string[]} lines - The lines of the content.
 * @param {ParseOptions} options - The options for parsing.
 * @returns {ParseResult} - The indices of the start and end markers.
 */
export const findMarkers = (
  lines: string[],
  options: ParseOptions,
): ParseResult => {
  const { matchesStart, matchesEnd } = lineMatchers(options.marker);

  let startIndex: number | undefined = undefined;
  let endIndex: number | undefined = undefined;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    startIndex = matchesStart(line) ? i : startIndex;
    endIndex = matchesEnd(line) ? i : endIndex;

    if (startIndex && endIndex) break;
  }

  return { startIndex, endIndex };
};

/**
 * Returns the start marker for a given marker.
 * @param {string} marker - The marker to use.
 * @returns {string} - The start marker.
 */
export const startMarker = (marker: string) =>
  `<!-- START ${marker} - generated ${
    changeCase.noCase(marker)
  } please keep comment here to allow auto update -->`;

/**
 * Returns the end marker for a given marker.
 * @param {string} marker - The marker to use.
 * @returns {string} - The end marker.
 */
export const endMarker = (marker: string) =>
  `<!-- END ${marker} - generated ${
    changeCase.noCase(marker)
  } please keep comment here to allow auto update -->`;

export const MARKER_COMMENT = "<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN `docgen` TO UPDATE -->";
