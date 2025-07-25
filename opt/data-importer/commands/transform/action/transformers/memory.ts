interface MemoryUnit {
  size: number;
  unit: string;
  type?: string;
}

export interface Memory {
  soldered?: MemoryUnit;
  dimms?: MemoryUnit;
}

/**
 * Parses a memory specification string and returns a `Memory` object.
 *
 * The input string can represent soldered memory, DIMMs, or both, separated by a "+".
 * - If only one value is provided, it is assumed to be soldered memory.
 * - If two values are provided (separated by "+"), the first is treated as soldered memory and the second as DIMMs.
 *
 * Each value can include a size (numeric), a unit (e.g., "GB", "MB"), and an optional type (e.g., "DDR4").
 * - If the size is zero, that memory unit is not included in the result.
 * - The unit is normalized to uppercase.
 * - The type is extracted if present (e.g., "DDR4").
 *
 * @param value - The memory specification string to parse.
 * @returns A `Memory` object containing `soldered` and/or `dimms` properties with their respective `MemoryUnit` details.
 */
export const toMemory = (value: string): Memory => {
  const memory = {} as Memory;

  // if we have only one value, we assume it's soldered memory
  if (!value.includes('+') && toMemoryUnit(value)) {
    memory.soldered = toMemoryUnit(value);
  }

  const [solderedValue, dimmsValue] = value.split('+');

  if (solderedValue && toMemoryUnit(solderedValue)) {
    memory.soldered = toMemoryUnit(solderedValue);
  }

  if (dimmsValue && toMemoryUnit(dimmsValue)) {
    memory.dimms = toMemoryUnit(dimmsValue);
  }

  return memory;
};

/**
 * Parses a memory size string and returns a `MemoryUnit` object containing the size, unit, and optional type.
 *
 * The input string should contain a numeric value followed by a unit (e.g., "16GB", "8 gb", "32 MB DDR4").
 * The function extracts the numeric size, the unit (e.g., "GB", "MB"), and, if present, the memory type (e.g., "DDR4").
 *
 * @param value - The memory size string to parse.
 * @returns A `MemoryUnit` object with `size`, `unit`, and optional `type` properties, or `undefined` if the size is zero or invalid.
 */
export const toMemoryUnit = (memoryString: string): MemoryUnit | undefined => {
  const unitDetails = {} as MemoryUnit;
  memoryString = memoryString.trim();

  // Size is the first few digits in the string
  const sizeMatch = memoryString.match(/^\d+/);
  if (!sizeMatch) return undefined;

  const size = parseInt(sizeMatch[0], 10);
  if (size === 0) return undefined;

  unitDetails.size = size;

  // Unit is following the size, which can be "GB", "MB", etc.
  // We remove all digits and spaces to get the unit
  // and convert it to uppercase for consistency
  const unitMatch = memoryString.match(/[\d\s]+([A-Za-z]+)/);
  if (!unitMatch) return undefined;

  const unitString = unitMatch[1].trim();
  if (!unitString) return undefined;

  unitDetails.unit = unitString.toUpperCase();

  // Type is optional and can be found in the string, e.g., "DDR4-2400"
  // We look for patterns like "DDR4", "DDR3", "DDR5-3600" etc.
  const typeMatch = memoryString.match(/(DDR\d+(-\d+)?)/i);

  if (typeMatch) {
    unitDetails.type = typeMatch[0].toUpperCase();
  }

  return unitDetails;
};
