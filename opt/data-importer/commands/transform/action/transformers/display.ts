export interface Resolution {
  name?: string;
  width?: number;
  height?: number;
}

export interface Brightness {
  value?: number;
  unit?: string;
}

export interface Display {
  size: number;
  resolution: Resolution;
  panelType?: string;
  brightness?: Brightness;
  antiGlare?: boolean;
  antiReflection?: boolean;
  privacyGuard?: boolean;
  touch?: boolean;
}

/**
 * Parses a display specification string and returns a `Display` object with extracted properties.
 *
 * The function attempts to extract the following properties from the input string:
 * - `size`: The display size in inches (e.g., `14.0"`).
 * - `privacyGuard`: Whether the display has a privacy guard feature.
 * - `resolution`: The display resolution, including name (e.g., "FHD+"), width, and height.
 * - `panelType`: The panel type (e.g., "IPS", "TN", "WVA").
 * - `brightness`: The brightness value and unit (e.g., "400 nits").
 * - `antiGlare`: Whether the display is anti-glare.
 * - `antiReflection`: Whether the display is anti-reflection.
 * - `touch`: Whether the display is touch-enabled.
 *
 * @param displayString - The string describing the display specifications.
 * @returns A `Display` object populated with the extracted properties.
 */
export const toDisplay = (displayString: string): Display => {
  const display = {} as Display;

  const sizeMatch = displayString.match(/(?<size>\d+(\.\d+)?)\s*\"/);
  if (sizeMatch?.groups?.size) {
    display.size = parseFloat(sizeMatch.groups.size);
  }

  const privacyGuardMatch = displayString.match(/Privacy Guard/i);
  if (privacyGuardMatch) {
    display.privacyGuard = true;
  }

  const resolutionMatch = displayString.match(
    /(?<name>\w+\+?)\s+\((?<width>\d+)x(?<height>\d+)\)/,
  );
  if (resolutionMatch?.groups) {
    display.resolution = {
      name: resolutionMatch.groups.name,
      width: parseInt(resolutionMatch.groups.width, 10),
      height: parseInt(resolutionMatch.groups.height, 10),
    };
  }

  const panelTypeMatch = displayString.match(/(?<panelType>IPS|TN|WVA)/i);
  if (panelTypeMatch?.groups?.panelType) {
    display.panelType = panelTypeMatch.groups.panelType.toUpperCase();
  }

  const brightnessMatch = displayString.match(/(?<value>\d+)\s*(?<unit>nits)/i);
  if (brightnessMatch?.groups?.value) {
    display.brightness = {
      value: parseInt(brightnessMatch.groups.value, 10),
      unit: brightnessMatch.groups.unit || "nits",
    };
  }

  const antiGlareMatch = displayString.match(/Anti-glare/i);
  if (antiGlareMatch) {
    display.antiGlare = true;
  }

  const antiReflectionMatch = displayString.match(/Anti-reflection/i);
  if (antiReflectionMatch) {
    display.antiReflection = true;
  }

  const touchMatch = displayString.match(/Touch/i);
  if (touchMatch) {
    display.touch = true;
  }

  return display;
};
