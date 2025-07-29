import { getCount } from './get-count.ts';
import { getUnits } from './get-unit.ts';
import { MemoryModule, toMemoryModule } from './module.ts';

export interface SystemMemory {
  soldered?: MemoryModule[];
  dimms?: MemoryModule[];
}

/**
 * Parses a memory configuration string and returns a `SystemMemory` object
 * representing the soldered and/or DIMM memory modules.
 *
 * The input string can describe memory in various formats, such as:
 * - "8GB Soldered + 8GB DIMM"
 * - "16GB Soldered"
 * - "2 x 8GB DIMM"
 * - "8GB Soldered"
 *
 * The function splits the string on '+' to separate soldered and DIMM modules,
 * parses the count and type of each module, and normalizes the memory units.
 *
 * @param memoryString - The memory configuration string to parse.
 * @returns A `SystemMemory` object with `soldered` and/or `dimms` arrays populated,
 *          or an empty object if parsing fails.
 */
export const toSystemMemory = (memoryString: string): SystemMemory => {
  const memory: SystemMemory = {};

  // Split on '+', trim spaces
  const parts = memoryString.split('+').map((s) => s.trim());

  // Assign soldered and dimms
  if (parts.length === 1) {
    const partString = parts[0];

    const count = getCount(partString);
    const countRegex = /^(?<count1>\d+)\s*x|x\s*(?<count2>\d+)\b/i;
    const cleanPartString = partString.replace(countRegex, '').trim();

    const modules = count
      ? Array.from(
        { length: count },
        () => toMemoryModule(cleanPartString),
      )
      : [toMemoryModule(partString)];

    if (!modules.every((m) => m !== undefined)) return memory; // If no valid module, return empty memory

    if (/soldered/i.test(partString)) {
      memory.soldered = modules;
    } else {
      memory.dimms = modules;
    }
  } else if (parts.length === 2) {
    const [solderedPart, dimmsPart] = parts;
    const solderedModule = toMemoryModule(solderedPart);
    const dimmsModule = toMemoryModule(dimmsPart);

    if (solderedModule) {
      memory.soldered = [solderedModule];
    }
    if (dimmsModule) {
      memory.dimms = [dimmsModule];
    }
  }

  const units = getUnits(memoryString);

  // return memory;
  return alignMemoryUnit(memory, units[0] || 'GB');
};

/**
 * Aligns the memory unit for the soldered and DIMM memory modules in a `SystemMemory` object.
 *
 * This function ensures that both `soldered` and `dimms` arrays within the `SystemMemory` object
 * use a consistent memory unit. The alignment logic is as follows:
 * - If only one of `soldered` or `dimms` has a defined unit, the other is updated to match.
 * - If neither has a defined unit, both are set to the provided `defaultUnit`.
 * - If both have defined units, no changes are made.
 * After alignment, any empty or undefined `soldered` or `dimms` properties are removed from the object.
 *
 * @param memory - The `SystemMemory` object containing `soldered` and `dimms` memory arrays.
 * @param defaultUnit - The default memory unit to use if neither `soldered` nor `dimms` has a unit defined.
 * @returns The updated `SystemMemory` object with aligned memory units.
 */
const alignMemoryUnit = (
  memory: SystemMemory,
  defaultUnit: string,
): SystemMemory => {
  // find the common unit for soldered and dimms
  const solderedUnit = memory.soldered?.find((m) => m.unit)?.unit;
  const dimmsUnit = memory.dimms?.find((m) => m.unit)?.unit;

  // if solderedUnit is set and dimmsUnit is not, align dimms to soldered
  if (solderedUnit && !dimmsUnit) {
    memory.dimms = memory.dimms?.map((m) => ({
      ...m,
      unit: solderedUnit,
    }));
  } // if dimmsUnit is set and solderedUnit is not, align soldered to dimms
  else if (dimmsUnit && !solderedUnit) {
    memory.soldered = memory.soldered?.map((m) => ({
      ...m,
      unit: dimmsUnit,
    }));
  } // if both are not set, use the default unit
  else if (!solderedUnit && !dimmsUnit) {
    memory.soldered = memory.soldered?.map((m) => ({
      ...m,
      unit: defaultUnit,
    }));
    memory.dimms = memory.dimms?.map((m) => ({
      ...m,
      unit: defaultUnit,
    }));
  }

  // remove undefined properties
  if (memory.soldered === undefined || memory.soldered?.length === 0) {
    delete memory.soldered;
  }
  if (memory.dimms === undefined || memory.dimms?.length === 0) {
    delete memory.dimms;
  }

  return memory;
};
