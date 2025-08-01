export interface Battery {
  cells?: number;
  type?: { value: number; unit: string };
}

/**
 * Parses a battery description string and returns a `Battery` object.
 *
 * The function extracts the number of cells and the battery type (value and unit) from the input string.
 * If the input string is "NONE" (case-insensitive), an empty `Battery` object is returned.
 *
 * @param batteryString - The string describing the battery (e.g., "6-cell (48Wh)").
 * @returns A `Battery` object containing the parsed information, or an empty object if no battery is present.
 */
export const toBattery = (
  batteryString: string,
): Battery => {
  const battery = {} as Battery;

  if (batteryString.toUpperCase() === 'NONE') {
    return battery; // Return empty battery if the string indicates no battery
  }

  const pattern = /(?<cells>\d+)(\s*-\s*)?cell/i;
  const cellsMatch = batteryString.match(pattern);

  if (cellsMatch?.groups) {
    const cells = parseInt(cellsMatch.groups.cells, 10);
    if (cells > 0) {
      battery.cells = cells;
    }
  }

  const typePattern = /\(?(?<value>[\d\.]+)(?<unit>[a-zA-Z]+)\)?/i;
  const typeMatch = batteryString.match(typePattern);

  if (typeMatch?.groups) {
    const value = parseFloat(typeMatch.groups.value);
    if (!isNaN(value)) {
      battery.type = {
        value: value,
        unit: typeMatch.groups.unit.trim().charAt(0).toUpperCase() +
          typeMatch.groups.unit.slice(1).toLowerCase(),
      };
    }
  }

  return battery;
};
