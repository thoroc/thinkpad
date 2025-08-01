export interface Graphics {
  vendor?: string;
  model?: string;
  memory?: {
    value: string;
    unit: string;
    type?: string; // e.g., GDDR5
  };
}

export const toGraphics = (
  graphicsString: string,
): Graphics => {
  const graphics = {} as Graphics;

  // Improved regex: vendor, model, optional memory (with or without parentheses), optional type
  const pattern =
    /^(Integrated)?\s*(?<vendor>Intel|NVIDIA|AMD)?\s*(?<modelName>[\w\- ]+)?(?:[\s\(]*(?<memoryValue>\d+)\s*(?<memoryUnit>GB|MB)[\)]*)?\s*(?<memoryType>GDDR5|GDDR6|LPDDR4|LPDDR5)?/i;
  const matches = pattern.exec(graphicsString);

  if (matches?.groups) {
    if (matches.groups.vendor) graphics.vendor = matches.groups.vendor;
    if (matches.groups.modelName) {
      graphics.model = matches.groups.modelName.trim();
    }
    if (matches.groups.memoryValue && matches.groups.memoryUnit) {
      graphics.memory = {
        value: matches.groups.memoryValue,
        unit: matches.groups.memoryUnit.toUpperCase(),
      };
    }
    if (matches.groups.memoryType) {
      if (!graphics.memory) {
        graphics.memory = { value: '', unit: '' };
      }
      graphics.memory.type = matches.groups.memoryType;
    }
  }

  return graphics;
};
