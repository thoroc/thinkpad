export interface BatteryCell {
  cells: number;
  type?: { value: number; unit: string };
}

export interface BatteryCells {
  internal: BatteryCell;
  external?: BatteryCell;
}

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
