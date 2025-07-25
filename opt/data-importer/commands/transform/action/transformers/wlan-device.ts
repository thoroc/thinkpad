export interface WLANDevice {
  vendor: string;
  chipset: string;
  standard: string[];
  antenna?: string;
}

/**
 * Parses a WLAN and Bluetooth information string and extracts WLAN device details.
 *
 * @param wlanAndBluetoothString - The input string containing WLAN and Bluetooth information.
 * @returns A `WLANDevice` object populated with extracted fields such as vendor, chipset, standard, and optionally antenna.
 *
 * The input string is expected to follow the format:
 *   "<vendor> <chipset> <standard>[, <antenna>]"
 * For example: "Intel 7265 ac/n, 2x2"
 *
 * If the input string does not match the expected pattern, an empty `WLANDevice` object is returned.
 */
export const toWLANDevice = (
  wlanAndBluetoothString: string,
): WLANDevice => {
  const wlanDevice = {} as WLANDevice;

  const pattern = new RegExp(
    /^(?<vendor>\w+)\s+(?<chipset>\d+)\s+(?<standard>[\d\w\/]+)(?:,\s*(?<antenna>\d+x\d+))?/,
  );

  // Extract all the fields before the "+"
  const matches = pattern.exec(wlanAndBluetoothString);

  if (matches === null) {
    return {} as WLANDevice; // Return empty object if no match found
  }

  if (matches.groups) {
    wlanDevice.vendor = matches.groups.vendor;
    wlanDevice.chipset = matches.groups.chipset;
    wlanDevice.standard = matches.groups.standard.split('/');
    if (matches.groups.antenna) {
      wlanDevice.antenna = matches.groups.antenna;
    }
  }

  return wlanDevice;
};
