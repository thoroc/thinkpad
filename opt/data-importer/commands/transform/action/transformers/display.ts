export interface Resolution {
  name?: string;
  width?: number;
  height?: number;
}

export interface Brightness {
  value?: string;
  unit?: string;
}

export interface Display {
  size: string;
  resolution: Resolution;
  panelType?: string;
  brightness?: Brightness;
  antiGlare?: boolean;
}

/**
 * Parses a display specification string and extracts structured display information.
 *
 * The function supports parsing display size, resolution, panel type, brightness, and anti-glare features
 * from strings such as:
 * - "14\" HD+ (1600x900)"
 * - "14\" FHD (1920x1080) IPS"
 * - "14\" FHD (1920x1080) WVA 250nits Anti-glare"
 * - "12.5\" FHD (1920x1080) WVA 300nits Anti-glare"
 *
 * @param displayString - The display specification string to parse.
 * @returns A `Display` object containing the extracted properties.
 */
export const toDisplay = (displayString: string): Display => {
  const display = {} as Display;

  // examples
  // "14\" HD+ (1600x900)"
  // "14\" FHD (1920x1080) IPS"
  // "14\" FHD (1920x1080) WVA 250nits Anti-glare"
  // "12.5\" FHD (1920x1080) WVA 300nits Anti-glare"

  const sizeMatch = displayString.match(/(?<size>\d+(\.\d+)?)\s*\"/);
  if (sizeMatch?.groups?.size) {
    display.size = sizeMatch.groups.size;
  }

  const resolutionMatch = displayString.match(
    /(?<name>\w+)\s+\((?<width>\d+)x(?<height>\d+)\)/,
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
      value: brightnessMatch.groups.value,
      unit: brightnessMatch.groups.unit || 'nits',
    };
  }

  const antiGlareMatch = displayString.match(/Anti-glare/i);
  if (antiGlareMatch) {
    display.antiGlare = true;
  }

  return display;
};
