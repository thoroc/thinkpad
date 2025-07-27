export interface PowerAdapter {
  wattage: number; // e.g., 65, 90, 135,
  slim?: boolean; // Indicates if the adapter is slim
}

export const toPowerAdapter = (powerAdapterString: string): PowerAdapter => {
  const powerAdapter = {} as PowerAdapter;

  // Match wattage, e.g., "65W", "90W", "135W"
  const wattageMatch = powerAdapterString.match(/(?<wattage>\d+)\s*W/i);
  if (wattageMatch?.groups) {
    powerAdapter.wattage = parseInt(wattageMatch.groups.wattage, 10);
  }

  // Check for slim adapter indication
  if (powerAdapterString.toLowerCase().includes('slim')) {
    powerAdapter.slim = true;
  }

  return powerAdapter;
};
