/**
 * Extracts a numeric count from the given string using a regular expression.
 *
 * @param partString - The string to extract the count from.
 * @returns The extracted count as a number if found; otherwise, `undefined`.
 */
export const getCount = (partString: string): number | undefined => {
  const countRegex = /^(?<count1>\d+)\s*x|x\s*(?<count2>\d+)\b/i;
  const countMatch = partString.match(countRegex);

  if (countMatch?.groups?.count1 || countMatch?.groups?.count2) {
    return parseInt(
      countMatch.groups.count1 || countMatch.groups.count2,
      10,
    ); // Default count is undefined
  }

  return;
};
