export interface Bluetooth {
  standard?: string;
}

export const toBluetooth = (
  wlanAndBluetoothString: string,
): Bluetooth => {
  const bluetooth = {} as Bluetooth;

  const pattern = /\+\s*BT(?<standard>[\d\.]+)/i;

  const match = wlanAndBluetoothString.match(pattern);

  if (match?.groups?.standard) {
    bluetooth.standard = match.groups.standard;
  }

  return bluetooth;
};
