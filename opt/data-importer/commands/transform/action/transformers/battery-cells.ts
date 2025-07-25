export interface BatteryCell {
  cells: number;
  type?: { value: number; unit: string };
}

export interface BatteryCells {
  internal: BatteryCell;
  external?: BatteryCell;
}

/**
 * Parses a battery cell description string and returns a `BatteryCells` object
 * representing the internal and/or external battery cell configurations.
 *
 * The input string is expected to describe battery cells in the following formats:
 * - "3-cell (45Wh)" for internal batteries
 * - "+ 6-cell (72Wh)" for external batteries
 *
 * Both internal and external batteries may be present in the string.
 *
 * @param batteryCellsString - The string describing the battery cells, e.g., "3-cell (45Wh) + 6-cell (72Wh)".
 * @returns A `BatteryCells` object with `internal` and/or `external` properties populated if present in the input string.
 */
export const toBatteryCells = (
  batteryCellsString: string,
): BatteryCells => {
  const batteryCells = {} as BatteryCells;

  const internalCellMatch = batteryCellsString.match(
    /(?<cells>\d+)\s*-*cell?\s*\((?<type>[\d\.]+[a-zA-Z]+)\)+\s*\+?/i,
  );
  const externalCellMatch = batteryCellsString.match(
    /\+\s*(?<cells>\d+)\s*-*cell?\s*\((?<type>[\d\.]+[a-zA-Z]+)\)/i,
  );

  if (internalCellMatch?.groups) {
    const { cells, type } = internalCellMatch.groups;
    batteryCells.internal = {
      cells: parseInt(cells, 10),
      type: type
        ? (() => {
          const match = type.match(/^(?<value>[\d\.]+)(?<unit>[a-zA-Z]+)/);
          return match?.groups
            ? { value: parseFloat(match.groups.value), unit: match.groups.unit }
            : undefined;
        })()
        : undefined,
    };
  }

  if (externalCellMatch?.groups) {
    const { cells, type } = externalCellMatch.groups;
    batteryCells.external = {
      cells: parseInt(cells, 10),
      type: type
        ? (() => {
          const match = type.match(/^(?<value>[\d\.]+)(?<unit>[a-zA-Z]+)/);
          return match?.groups
            ? { value: parseFloat(match.groups.value), unit: match.groups.unit }
            : undefined;
        })()
        : undefined,
    };
  }

  return batteryCells;
};
