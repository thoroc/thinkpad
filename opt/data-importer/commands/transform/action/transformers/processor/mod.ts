import { Specs, toSpecs } from './specs.ts';

export interface Processor {
  family: string;
  model: string;
  specs?: Specs;
  vendor: string;
}

export const IntelProcessorFamilies = [
  'Pentium',
  'Celeron',
  'Atom',
  'Core i3',
  'Core i5',
  'Core i7',
  'Core i9',
  'i3',
  'i5',
  'i7',
  'i9',
];

export const AMDProcessorFamilies = [
  'Ryzen 3',
  'Ryzen 5',
  'Ryzen 7',
  'Ryzen 9',
  'Athlon',
  'A4',
  'A6',
  'A8',
  'A10',
  'A12',
];

/**
 * Transforms a processor description string into a `Processor` object.
 *
 * The input string should follow the format:
 * ```
 * <name> (<cores>C / <threads>T, <min_speed> / <max_speed>..., <cache>MB
 * ```
 * Example: `"Intel i7 (4C/8T, 2.6/4.5GHz, 8192MB"`
 *
 * @param source - The processor description string to parse.
 * @returns A `Processor` object with extracted properties: name, cores, hyperThreading, speed, and cache.
 * @throws {Error} If the input string does not match the expected format.
 */
export const toProcessor = (processorString: string): Processor => {
  const processor = {} as Processor;

  const specsMatch = processorString.match(/^.*\((?<specs>.+)\)$/);

  if (specsMatch?.groups?.specs) {
    const specsString = specsMatch.groups.specs.trim();
    const specs = toSpecs(specsString);

    if (specs) {
      processor.specs = specs;
    }
  }

  const processorMatch = processorString.match(
    /Core?\s?(?<family>[\w\d]+)\-(?<model>[\w\d]+)/
  );
  if (processorMatch?.groups) {
    processor.family = processorMatch.groups.family;
    processor.model = processorMatch.groups.model;
  }

  console.log(`processorMatch: [${processorMatch}]`);

  const vendorMatch = processorString.match(/^(?<vendor>AMD|Intel)/);
  if (vendorMatch?.groups) {
    processor.vendor = vendorMatch.groups.vendor;
  } else if (
    IntelProcessorFamilies.map((family) => family.toLowerCase()).includes(
      processor.family.toLowerCase()
    )
  ) {
    // Default to Intel if the family is recognized
    processor.vendor = 'Intel';
  } else if (
    AMDProcessorFamilies.map((family) => family.toLowerCase()).includes(
      processor.family.toLowerCase()
    )
  ) {
    // Default to AMD if the family is recognized
    processor.vendor = 'AMD';
  } else {
    // Default vendor if not specified
    processor.vendor = 'Unknown';
  }

  return processor;
};
