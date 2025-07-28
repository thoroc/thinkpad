import { MemoryModule, toMemoryModule } from './module.ts';

export interface SystemMemory {
  soldered?: MemoryModule[];
  dimms?: MemoryModule[];
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
 * @returns A `SystemMemory` object containing `soldered` and/or `dimms` properties with their respective `MemoryModule` details.
 */
export const toSystemMemory = (memoryString: string): SystemMemory => {
  const memory = {} as SystemMemory;

  // if we have only one value, we assume it's soldered memory
  if (!memoryString.includes('+') && toMemoryModule(memoryString)) {
    memory.soldered?.push(toMemoryModule(memoryString) as MemoryModule);
  }

  const [solderedPart, dimmsPart] = memoryString.split('+').map((part) => part.trim());

  const solderedMatch = solderedPart.match(/^(\d+\s?[\w\d-\s]*)+\+/);

  if (solderedMatch && solderedMatch[0] && toMemoryModule(solderedMatch[0])) {
    memory.soldered?.push(toMemoryModule(solderedMatch[0]) as MemoryModule);
  }
  const dimmsMatch = dimmsPart.match(/\+\s*(\d+\s?[\w\d-\s]*)/);

  if (dimmsMatch && dimmsMatch[1] && toMemoryModule(dimmsMatch[1])) {
    memory.dimms?.push(toMemoryModule(dimmsMatch[1]) as MemoryModule);
  }

  // find all the units in soldered and dimms
  const solderedUnit = new Set(memory.soldered?.find((m) => m.unit)?.unit);
  const dimmsUnit = new Set(memory.dimms?.find((m) => m.unit)?.unit);
  const units = new Set([...solderedUnit, ...dimmsUnit]);

  if (units.size > 1 || units.size === 0) {
    throw new Error(`Invalid memory string: ${memoryString}`);
  }

  const unit = Array.from(units)[0];

  if (units.size === 1 && units) {
    if (memory.soldered) {
      memory.soldered.forEach((soldered) => {
        soldered.unit = unit.toUpperCase();
      });
    }

    if (memory.dimms) {
      memory.dimms.forEach((dimms) => {
        dimms.unit = unit.toUpperCase();
      });
    }
  }

  return memory;
};
