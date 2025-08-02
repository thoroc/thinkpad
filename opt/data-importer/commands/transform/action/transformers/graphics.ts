export interface Graphics {
  vendor?: string;
  model?: string;
  memory?: {
    value?: number;
    unit?: string;
    type?: string; // e.g., GDDR5
  };
}

export const toGraphics = (graphicsString: string): Graphics => {
  const graphics = {} as Graphics;

  // Regex for vendor, model, and memory (handles all your test cases)
  const pattern =
    /^(Integrated\s+)?(?<vendor>Intel|NVIDIA|AMD)?\s*(?<model>(?:HD|UHD|GeForce|Quadro|Radeon|GT|MX|K)?[\w\s\-\.]+?)(?:,?\s*(?<memoryValue>\d+)\s*(?<memoryUnit>GB|MB)\s*(?<memoryType>GDDR5|GDDR6|LPDDR4|LPDDR5|Memory)?)?$/i;
  const matches = pattern.exec(graphicsString.trim());

  if (matches?.groups) {
    if (matches.groups.vendor) graphics.vendor = matches.groups.vendor.trim();
    if (matches.groups.model)
      graphics.model = matches.groups.model.trim().replace(/\s+$/, '');
    if (matches.groups.memoryValue && matches.groups.memoryUnit) {
      graphics.memory = {
        value: parseInt(matches.groups.memoryValue, 10),
        unit: matches.groups.memoryUnit.toUpperCase(),
      };
      // Only add type if it's not "Memory"
      if (
        matches.groups.memoryType &&
        !/memory/i.test(matches.groups.memoryType)
      ) {
        graphics.memory.type = matches.groups.memoryType;
      }
    }
  }

  return graphics;
};
