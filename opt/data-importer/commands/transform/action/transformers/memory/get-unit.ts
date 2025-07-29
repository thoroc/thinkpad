/**
 * Extracts and returns a list of unique memory units found in the given memory string.
 *
 * The function searches for patterns representing a numeric size followed by an optional unit (e.g., "MB", "GB", "KB").
 * It returns an array of unique unit strings (in uppercase) that are present in the input string.
 *
 * @param memoryString - The input string containing memory size(s) with units.
 * @returns An array of unique memory unit strings found in the input, in uppercase.
 */
export const getUnits = (memoryString: string): string[] => {
  const unitPattern = /(?<size>\d+)\s*(?<unit>\w[B|b])?/gi;
  const units = memoryString.matchAll(unitPattern);
  const unitSet = new Set<string>();

  for (const match of units) {
    const unit = match.groups?.unit?.toUpperCase();
    if (unit) {
      unitSet.add(unit);
    }
  }

  return Array.from(unitSet);
};
