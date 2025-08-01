import { Battery, toBattery } from './battery.ts';

export interface Batteries {
  internal?: Battery[];
  external?: Battery[];
}

/**
 * Parses a battery cell description string and returns a `Batteries` object
 * categorizing batteries as internal or external.
 *
 * The input string can describe one or two batteries, separated by a '+' sign.
 * Each part is analyzed to determine if it refers to an internal or external battery
 * based on keywords such as "internal", "integrated", "external", or "swappable".
 *
 * - If only one battery is described, it is classified as internal unless it matches external keywords.
 * - If two batteries are described, each is classified individually.
 * - If a part cannot be classified, the first is assumed internal, the second external.
 * - If no valid batteries are parsed, an empty object is returned.
 *
 * @param batteryCellsString - The string describing battery cells (e.g., "3-cell internal + 6-cell external").
 * @returns A `Batteries` object with `internal` and/or `external` arrays of `Battery` objects, or an empty object if none found.
 */
export const toBatteries = (
  batteryCellsString: string,
): Batteries => {
  const batteries = {} as Batteries;

  // split the input string by '+' to handle both internal and external cells
  const parts = batteryCellsString.split('+').map((s) => s.trim());

  if (parts.length === 0) {
    return {};
  }

  const isExternal = (part: string): boolean => /external|swappable/i.test(part);
  const isInternal = (part: string): boolean => /internal|integrated/i.test(part);

  if (parts.length === 1) {
    const battery: Battery = toBattery(parts[0]);

    if (!battery) return batteries; // Skip if no valid battery was parsed

    if (isExternal(parts[0]) && !isInternal(parts[0])) {
      (batteries.external = batteries.external || []).push(battery);
    } else {
      (batteries.internal = batteries.internal || []).push(battery);
    }
  } else if (parts.length === 2) {
    // Handle both internal and external cells
    for (let i = 0; i < parts.length; i++) {
      const battery: Battery = toBattery(parts[i]);

      if (!battery || Object.entries(battery).length === 0) continue; // Skip if no valid battery was parsed

      if ((isInternal(parts[i]))) {
        (batteries.internal = batteries.internal || []).push(battery);
      } else if (isExternal(parts[i])) {
        (batteries.external = batteries.external || []).push(battery);
      } else if (!isInternal(parts[i]) && !isExternal(parts[i])) {
        if (i === 0) {
          (batteries.internal = batteries.internal || []).push(battery);
        } else {
          (batteries.external = batteries.external || []).push(battery);
        }
      }
    }
  }

  // If no internal or external cells were found, return an empty object
  if (!batteries.internal && !batteries.external) {
    return {};
  }

  return batteries;
};
