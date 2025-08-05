import { toModel } from './model.ts';
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

  // Split into model and specs using regex
  const match = processorString.match(/^(.*?)\s*\((.+)\)\s*$/);
  let modelPart = processorString;
  let specsPart = '';
  if (match) {
    modelPart = match[1].trim();
    specsPart = match[2].trim();
  }

  // Use toModel on the model part
  const model = toModel(modelPart);
  processor.vendor = model.vendor || 'Unknown';
  processor.family = model.family;
  processor.model = model.name || '';

  // Use toSpecs on the specs part if present
  if (specsPart) {
    const specs = toSpecs(specsPart);
    if (specs) {
      processor.specs = specs;
    }
  }

  return processor;
};
