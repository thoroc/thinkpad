import { NEGATIVE_VALUES, POSITIVE_VALUES, toBoolean } from './boolean.ts';

/**
 * Converts a given string representing a multi-touch value to a boolean or returns the original string.
 *
 * The function first converts the input string to uppercase and checks if it matches any value in the
 * `POSITIVE_VALUES` or `NEGATIVE_VALUES` arrays. If a match is found, it returns the corresponding boolean
 * value using the `toBoolean` function. Otherwise, it returns the uppercase string.
 *
 * @param multiTouchString - The string value to be converted.
 * @returns A boolean if the string matches a positive or negative value, otherwise the uppercase string.
 */
export const toMultiTouch = (
  multiTouchString: string,
): boolean | string => {
  const multiTouch = multiTouchString.toUpperCase();

  if ([...POSITIVE_VALUES, ...NEGATIVE_VALUES].includes(multiTouch)) {
    return toBoolean(multiTouch);
  }

  return multiTouch;
};
