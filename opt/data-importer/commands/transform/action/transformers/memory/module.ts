export interface MemoryModule {
  size: number;
  unit?: string;
  type?: string;
}

/**
 * Parses a memory size string and returns a `MemoryModule` object containing the size, unit, and optional type.
 *
 * The input string should contain a numeric value followed by a unit (e.g., "16GB", "8 gb", "32 MB DDR4").
 * The function extracts the numeric size, the unit (e.g., "GB", "MB"), and, if present, the memory type (e.g., "DDR4").
 *
 * @param value - The memory size string to parse.
 * @returns A `MemoryModule` object with `size`, `unit`, and optional `type` properties, or `undefined` if the size is zero or invalid.
 */
export const toMemoryModule = (
  memoryString: string,
): MemoryModule | undefined => {
  const unitDetails = {} as MemoryModule;
  memoryString = memoryString.trim();

  // Size is the first few digits in the string
  const sizeMatch = memoryString.match(/^(?<size>\d+)/);
  if (!sizeMatch?.groups?.size) return undefined;

  const size = parseInt(sizeMatch.groups.size, 10);
  if (size === 0) return undefined;

  unitDetails.size = size;

  // Unit is following the size, which can be "GB", "MB", etc.
  // We remove all digits and spaces to get the unit
  // and convert it to uppercase for consistency
  const unitMatch = memoryString.match(/[\d\s]+(?<unit>[A-Za-z]{1}[Bb])/);
  const unitString = unitMatch?.groups?.unit;

  if (unitString) {
    unitDetails.unit = unitString.trim().toUpperCase();
  }

  // Type is optional and can be found in the string, e.g., "DDR4-2400"
  // We look for patterns like "DDR4", "DDR3", "DDR5-3600" etc.
  const typeMatch = memoryString.match(/(?<type>DDR\d+(-\d+)?)/i);
  if (typeMatch?.groups?.type) {
    unitDetails.type = typeMatch.groups.type.toUpperCase();
  }

  return unitDetails;
};
