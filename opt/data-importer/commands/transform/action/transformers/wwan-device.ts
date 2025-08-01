export interface WWANDevice {
  vendor?: string;
  model?: string;
  upgradable: boolean;
}

export const toWWANDevice = (
  wwanString: string,
): WWANDevice => {
  const wwan = {} as WWANDevice;

  if (
    wwanString.toUpperCase() === "NONE" || wwanString.toUpperCase() === "NO"
  ) {
    return { upgradable: false };
  }

  if (wwanString.toUpperCase() === "WWAN UPGRADABLE") {
    return { upgradable: true };
  }

  // special case if we have an SSD
  const ssdPattern = /\d{1,2}GB\s*(SSD)?/i;
  if (ssdPattern.test(wwanString)) {
    return { upgradable: true };
  }

  // Regex to match vendor, model, and optional upgradable status
  const pattern = /^(?<vendor>[\w\s]+)\s+(?<model>[\w\s\-]+)$/i;
  const matches = pattern.exec(wwanString);

  if (matches?.groups) {
    wwan.vendor = matches.groups.vendor.trim();
    wwan.model = matches.groups.model.trim();
    wwan.upgradable = true; // Assume upgradable if vendor and model are found
  }

  return wwan;
};
