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

export const toDisplay = (displayString: string): Display => {
  const display = {} as Display;

  // examples
  // "14\" HD+ (1600x900)"
  // "14\" FHD (1920x1080) IPS"
  // "14\" FHD (1920x1080) WVA 250nits Anti-glare"
  // "12.5\" FHD (1920x1080) WVA 300nits Anti-glare"

  const sizeMatch = displayString.match(/(\d+(\.\d+)?)\s*\"/);
  if (sizeMatch && sizeMatch[1]) {
    display.size = sizeMatch[1];
  }

  const resolutionMatch = displayString.match(/(\w+)\s+\((\d+)x(\d+)\)/);
  if (resolutionMatch) {
    display.resolution = {
      name: resolutionMatch[1],
      width: parseInt(resolutionMatch[2], 10),
      height: parseInt(resolutionMatch[3], 10),
    };
  }

  const panelTypeMatch = displayString.match(/(IPS|TN|WVA)/i);
  if (panelTypeMatch && panelTypeMatch[0]) {
    display.panelType = panelTypeMatch[0].toUpperCase();
  }

  const brightnessMatch = displayString.match(/(\d+)\s*(nits)/i);
  if (brightnessMatch && brightnessMatch[1]) {
    display.brightness = {
      value: brightnessMatch[1],
      unit: brightnessMatch[2] || 'nits',
    };
  }

  const antiGlareMatch = displayString.match(/Anti-glare/i);
  if (antiGlareMatch) {
    display.antiGlare = true;
  }

  return display;
};
