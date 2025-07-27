export interface WLANDevice {
  vendor?: string;
  chipset?: string;
  standard?: string[];
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

  if (wlanAndBluetoothString === 'None') {
    return wlanDevice;
  }

  // Remove Bluetooth info
  const cleaned = wlanAndBluetoothString.split('+')[0].trim();

  // Try: vendor chipset standard[, antenna]
  let pattern =
    /^(?<vendor>[\w\d]+)\s+(?<chipset>[\w\d]+)\s+(?<standard>[\w\/\-]+)(?:,\s*(?<antenna>\d+x\d+))?/;
  let matches = pattern.exec(cleaned);
  if (matches?.groups) {
    wlanDevice.vendor = matches.groups.vendor;
    wlanDevice.chipset = matches.groups.chipset;
    wlanDevice.standard = matches.groups.standard ? matches.groups.standard.split('/') : undefined;
    if (matches.groups.antenna) wlanDevice.antenna = matches.groups.antenna;
    return wlanDevice;
  }

  // Try: vendor standard[, antenna] (chipset missing)
  pattern = /^(?<vendor>[\w\d]+)\s+(?<standard>[\w\/\-]+)(?:,\s*(?<antenna>\d+x\d+))?/;
  matches = pattern.exec(cleaned);
  if (matches?.groups) {
    wlanDevice.vendor = matches.groups.vendor;
    wlanDevice.standard = matches.groups.standard ? matches.groups.standard.split('/') : undefined;
    if (matches.groups.antenna) wlanDevice.antenna = matches.groups.antenna;
    return wlanDevice;
  }

  // Try: standard[, antenna] (vendor/chipset missing)
  pattern = /^(?<standard>[\w\/\-]+)(?:,\s*(?<antenna>\d+x\d+))?/;
  matches = pattern.exec(cleaned);
  if (matches?.groups) {
    wlanDevice.standard = matches.groups.standard ? matches.groups.standard.split('/') : undefined;
    if (matches.groups.antenna) wlanDevice.antenna = matches.groups.antenna;
    return wlanDevice;
  }

  return wlanDevice;
};
