export interface Specs {
  cores: number;
  threads?: number;
  speed?: {
    min: string;
    max: string;
  };
  cache?: string;
}

export const toSpecs = (specsString: string): Specs => {
  const specs = {} as Specs;

  const parts = specsString.split(',').map((part) => part.trim());

  // Core/Thread parsing
  const corePart = parts.find((p) => /\dC/.test(p)) ?? '';

  console.log(`corePart: [${corePart}]`);

  // Updated regex: allow spaces around /, and before/after C/T
  const coreCountMatch = corePart.match(
    /^\s*(?<cores>\d+)\s*C(?:\s*\/\s*(?<threads>\d+)\s*T)?\s*$/i
  );

  console.log('coreCountMatch', coreCountMatch);

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
