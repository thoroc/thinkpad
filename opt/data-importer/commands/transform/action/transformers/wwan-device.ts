export interface WWANDevice {
  vendor?: string;
  model?: string;
  upgradable?: boolean;
}

export const toWWANDevice = (
  wwanString: string,
): WWANDevice => {
  const wwan: WWANDevice = {};

  if (wwanString === 'None') {
    return wwan; // Return empty object if no WWAN device
  }

  if (wwanString === 'WWAN Upgradable') {
    wwan.upgradable = true;

    return wwan;
  }

  // Regex to match vendor, model, and optional upgradable status
  const pattern = /^(?<vendor>[\w\s]+)\s+(?<model>[\w\s\-]+)$/i;
  const matches = pattern.exec(wwanString);

  if (matches?.groups) {
    wwan.vendor = matches.groups.vendor.trim();
    wwan.model = matches.groups.model.trim();
    wwan.upgradable = wwanString.includes('(Upgradable)');
  }

  return wwan;
};
