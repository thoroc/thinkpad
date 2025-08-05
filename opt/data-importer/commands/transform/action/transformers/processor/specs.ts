export interface Specs {
  cores: number;
  threads?: number;
  speed?: {
    min: string;
    max: string;
  };
  cache?: string;
}

/**
 * Parses a CPU specification string and returns a `Specs` object containing
 * the number of cores, threads, speed (min/max GHz), and cache size.
 *
 * The input string should contain comma-separated parts, such as:
 * - "4C/8T, 2.0/3.6GHz, 8MB"
 * - "6C, 2.5GHz, 12MB"
 *
 * Recognized patterns:
 * - Cores/Threads: e.g. "4C/8T", "6C"
 * - Speed: e.g. "2.0/3.6GHz", "2.5GHz"
 * - Cache: e.g. "8MB", "12 MB"
 *
 * @param specsString - The CPU specification string to parse.
 * @returns A `Specs` object with parsed core count, thread count, speed, and cache size.
 */
export const toSpecs = (specsString: string): Specs => {
  const specs = {} as Specs;

  const parts = specsString.split(',').map((part) => part.trim());

  // Core/Thread parsing
  const corePart = parts.find((p) => /\dC/.test(p)) ?? '';

  // Updated regex: allow spaces around /, and before/after C/T
  const coreCountMatch = corePart.match(
    /^\s*(?<cores>\d+)\s*C(?:\s*\/\s*(?<threads>\d+)\s*T)?\s*$/i
  );

  if (coreCountMatch?.groups) {
    specs.cores = parseInt(coreCountMatch.groups.cores, 10);

    if (coreCountMatch?.groups.threads !== undefined) {
      specs.threads = parseInt(coreCountMatch.groups.threads, 10);
    }
  }

  // Speed parsing
  const speedPart = parts.find((p) => /GHz/i.test(p));
  if (speedPart) {
    // Match "min / maxGHz", "min/max GHz", or just "speedGHz"
    const speedMatch = speedPart.match(
      /(?<min>[\d.]+)\s*(?:\/\s*|\/)?\s*(?<max>[\d.]+)?\s*GHz/i
    );
    if (speedMatch?.groups) {
      const minSpeed = parseFloat(speedMatch.groups.min);
      const maxSpeed = speedMatch.groups.max
        ? parseFloat(speedMatch.groups.max)
        : minSpeed;
      specs.speed = {
        min: `${minSpeed} Ghz`,
        max: `${maxSpeed} Ghz`,
      };
    } else {
      // Try to match just a single speed (e.g. "2.0GHz")
      const singleSpeedMatch = speedPart.match(/([\d.]+)\s*GHz/i);
      if (singleSpeedMatch) {
        const speed = parseFloat(singleSpeedMatch[1]);
        specs.speed = {
          min: `${speed} Ghz`,
          max: `${speed} Ghz`,
        };
      }
    }
  }

  // Cache parsing
  const cachePart = parts.find((p) => /MB/i.test(p));
  if (cachePart) {
    const cacheMatch = cachePart.match(/(\d+)\s*M[Bb]/);
    if (cacheMatch) {
      specs.cache = `${parseInt(cacheMatch[1], 10)} Mb`;
    }
  }

  return specs;
};
