export interface WLANDevice {
  vendor: string;
  chipset: string;
  standard: string;
}

export const toWLANDevice = (
  wlanAndBluetoothString: string,
): WLANDevice => {
  const wlanDevice = {} as WLANDevice;

  const pattern = /(?<vendor>[A-Za-z]+)\s+(?<chipset>\d+)\s+(?<standard>[\w/]+)\s*\+?/;

  // Extract all the fields before the "+"
  const matches = pattern.exec(wlanAndBluetoothString);

  if (matches === null) {
    return {} as WLANDevice; // Return empty object if no match found
  }

  if (matches.groups) {
    wlanDevice.vendor = matches.groups.vendor;
    wlanDevice.chipset = matches.groups.chipset;
    wlanDevice.standard = matches.groups.standard;
  }

  return wlanDevice;
};
