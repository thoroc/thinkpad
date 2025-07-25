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
    /(\d+)\s*-*cell?\s\(([\d\.]+Wh)\)+\s*\+?/i,
  );
  const externalCellMatch = batteryCellsString.match(
    /\+\s*(\d+)\s*-*cell?\s\(([\d\.]+Wh)\)/i,
  );

  if (internalCellMatch) {
    batteryCells.internal = {
      cells: parseInt(internalCellMatch[1], 10),
      type: internalCellMatch[2]
        ? (() => {
          const match = internalCellMatch[2].match(/^([\d\.]+)([a-zA-Z]+)$/);
          return match ? { value: parseFloat(match[1]), unit: match[2] } : undefined;
        })()
        : undefined,
    };
  }

  if (externalCellMatch) {
    batteryCells.external = {
      cells: parseInt(externalCellMatch[1], 10),
      type: externalCellMatch[2]
        ? (() => {
          const match = externalCellMatch[2].match(/^([\d\.]+)([a-zA-Z]+)$/);
          return match ? { value: parseFloat(match[1]), unit: match[2] } : undefined;
        })()
        : undefined,
    };
  }

  return batteryCells;
};
