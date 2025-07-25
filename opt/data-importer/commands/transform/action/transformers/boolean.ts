export const POSITIVE_VALUES = ['YES', 'TRUE', 'Y'];
export const NEGATIVE_VALUES = ['NO', 'NONE', 'N'];

/**
 * Converts a string representation of a boolean value to a boolean.
 *
 * Recognizes "YES", "TRUE", and "Y" (case-insensitive) as `true`.
 * Recognizes "NO" and "NONE" (case-insensitive) as `false`.
 * Returns `false` for any other input.
 *
 * @param booleanString - The string to convert to a boolean.
 * @returns `true` if the input matches a positive value, otherwise `false`.
 */
export const toBoolean = (
  booleanString: string,
): boolean => {
  if (POSITIVE_VALUES.includes(booleanString.toUpperCase())) {
    return true;
  }

  if (NEGATIVE_VALUES.includes(booleanString.toUpperCase())) {
    return false;
  }

  return false;
};
