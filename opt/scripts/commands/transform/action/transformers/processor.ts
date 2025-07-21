interface Processor {
  name: string;
  cores: number;
  hyperThreading: boolean;
  speed: {
    min: string;
    max: string;
  };
  cache: string;
}

export const transformToProcessor = (source: string): Processor => {
  const pattern = new RegExp(
    /(.*)\s\((\d)C\s?\/?\s?(\d)?T?,\s?(\d\.\d)\s?\/\s?(\d\.\d).*,\s?(\d+)MB/,
  );

  const processor = pattern.exec(source);

  if (!processor) {
    throw new Error(`Invalid source: ${source}`);
  }

  const [, name, cores, withHyperThreading, min, max, memory] = processor;

  return {
    name,
    cores: parseInt(cores),
    hyperThreading: parseInt(withHyperThreading) ? true : false,
    speed: {
      min: `${parseFloat(min)} Ghz`,
      max: `${parseFloat(max)} Ghz`,
    },
    cache: `${parseInt(memory)}Mb`,
  };
};
