export interface WLANDevice {
  vendor: string;
  chipset: string;
  standard: string;
}

export const toWLANDevice = (
  wlanAndBluetoothString: string,
): WLANDevice => {
  const wlanDevice = {} as WLANDevice;

  // Extract all the fields before the "+"
  const pattern = wlanAndBluetoothString.match(
    /([A-Za-z\s]+)\s+(\d+)\s+([\w/]+)\s*\+?/,
  );

  if (pattern) {
    wlanDevice.vendor = pattern[1];
    wlanDevice.chipset = pattern[2];
    wlanDevice.standard = pattern[3];
  }

  return wlanDevice;
};
