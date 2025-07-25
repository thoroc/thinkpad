export interface Processor {
  name: string;
  cores: number;
  hyperThreading: boolean;
  speed: {
    min: string;
    max: string;
  };
  cache: string;
}

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
export const toProcessor = (source: string): Processor => {
  const pattern = new RegExp(
    /(?<name>.*)\s\((?<cores>\d)C\s?\/?\s?(?<threads>\d)?T?,\s?(?<min>\d\.\d)\s?\/\s?(?<max>\d\.\d).*,\s?(?<cache>\d+)MB/,
  );

  const processor = pattern.exec(source);

  if (!processor || !processor.groups) {
    throw new Error(`Invalid source: ${source}`);
  }

  const { name, cores, threads, min, max, cache } = processor.groups;

  return {
    name,
    cores: parseInt(cores),
    hyperThreading: parseInt(threads) ? true : false,
    speed: {
      min: `${parseFloat(min)} Ghz`,
      max: `${parseFloat(max)} Ghz`,
    },
    cache: `${parseInt(cache)}Mb`,
  };
};
