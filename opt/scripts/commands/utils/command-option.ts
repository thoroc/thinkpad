type CommandOptionFlagValue = 'string' | 'number' | 'boolean';

export interface CommandOptionFlag {
  short?: string;
  long?: string;
  key: string;
  value: CommandOptionFlagValue;
}

export interface CommandOption {
  flag: CommandOptionFlag;
  description: string;
}

export const toString = (
  options: CommandOption,
): { flag: string; description: string } => {
  try {
    const short = options.flag.short || `-${options.flag.key[0]}`;

    if (short) {
      if (!short.startsWith('-')) {
        throw new Error("Short flag must start with '-'");
      }

      if (short.length !== 2) {
        throw new Error("Short flag must be two character including '-'");
      }
    }

    const long = options.flag.long || `--${options.flag.key}`;

    if (long) {
      if (long && !long.startsWith('--')) {
        throw new Error("Long flag must start with '--'");
      }

      if (long.slice(2) !== options.flag.key) {
        throw new Error('Long flag must match key');
      }
    }

    return {
      flag: `${short}, ${long} <${options.flag.key}:${options.flag.value}>`,
      description: options.description,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
