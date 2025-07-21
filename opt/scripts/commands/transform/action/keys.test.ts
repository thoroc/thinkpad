import { assertEquals } from 'jsr:@std/assert';
import { describe, it } from 'jsr:@std/testing/bdd';
import { keysToBoolean, splitJsonKeys } from './keys.ts';

describe('splitJsonKeys', () => {
  it('should split json keys', () => {
    // Arrange
    const data = {
      'Model': '20B6007T++',
      'Product': 'T440',
      'Region': 'WE',
      'MachineType': '20B6',
      'TopSeller': 'TopSeller',
      'Processor': 'i5-4200U (2C, 1.6 / 2.6GHz, 3MB, 1600MHz)',
      'vPro': 'No',
      'Graphics': 'Intel HD Graphics 4400',
      'Memory (soldered + DIMM)': '0+4GB',
      'Display': '14" HD (1366x768)',
      'MultiTouch': 'None',
      'Storage': '500GB 7200rpm',
      'Optical': 'None',
      'WLAN & Bluetooth': 'Intel 7260 b/g/n + BT4.0',
      'WWAN / M.2 SSD': 'WWAN upgradable',
      'SimCard': 'None',
      'Smart Card Reader / M.2 SSD': '16GB SSD',
      'Camera': '720p',
      'BacklitKeyboard': 'None',
      'FingerprintReader': 'Fingerprint Reader',
      'NFC': 'None',
      'Battery Cells (internal + external)': '3-cell (23.5Wh) + 6-cell (47.5wh)',
      'PowerAdapter': '45W',
      'Preload': 'Windows 8.1 DG Windows 7 Pro 64',
      'BaseWarranty': '3-year depot',
      'Global': 'No',
      'AnnDate': '02/14',
    };
    const schema = {
      'Memory (soldered + DIMM)': { 'Memory': ['Soldered', 'DIMM'] },
      'WLAN & Bluetooth': ['WLAN', 'Bluetooth'],
      'Battery Cells (internal + external)': {
        'BatteryCells': ['Internal', 'External'],
      },
    };
    const expected = {
      'Model': '20B6007T++',
      'Product': 'T440',
      'Region': 'WE',
      'MachineType': '20B6',
      'TopSeller': 'TopSeller',
      'Processor': 'i5-4200U (2C, 1.6 / 2.6GHz, 3MB, 1600MHz)',
      'vPro': 'No',
      'Graphics': 'Intel HD Graphics 4400',
      'Memory': {
        'Soldered': '0',
        'DIMM': '4GB',
      },
      'Display': '14" HD (1366x768)',
      'MultiTouch': 'None',
      'Storage': '500GB 7200rpm',
      'Optical': 'None',
      'WLAN': 'Intel 7260 b/g/n',
      'Bluetooth': 'BT4.0',
      'WWAN / M.2 SSD': 'WWAN upgradable',
      'SimCard': 'None',
      'Smart Card Reader / M.2 SSD': '16GB SSD',
      'Camera': '720p',
      'BacklitKeyboard': 'None',
      'FingerprintReader': 'Fingerprint Reader',
      'NFC': 'None',
      'BatteryCells': {
        'Internal': '3-cell (23.5Wh)',
        'External': '6-cell (47.5wh)',
      },
      'PowerAdapter': '45W',
      'Preload': 'Windows 8.1 DG Windows 7 Pro 64',
      'BaseWarranty': '3-year depot',
      'Global': 'No',
      'AnnDate': '02/14',
    };

    // Act
    const actual = splitJsonKeys(data, schema);

    // Assert
    assertEquals(actual, expected);
  });
});

describe('keysToBoolean', () => {
  it('should convert keys to boolean', () => {
    // Arrange
    const data = {
      'Model': '20B6007T++',
      'Product': 'T440',
      'Region': 'WE',
      'MachineType': '20B6',
      'TopSeller': 'TopSeller',
      'Processor': 'i5-4200U (2C, 1.6 / 2.6GHz, 3MB, 1600MHz)',
      'vPro': 'No',
      'Graphics': 'Intel HD Graphics 4400',
      'Memory (soldered + DIMM)': '0+4GB',
      'Display': '14" HD (1366x768)',
      'MultiTouch': 'None',
      'Storage': '500GB 7200rpm',
      'Optical': 'None',
      'WLAN & Bluetooth': 'Intel 7260 b/g/n + BT4.0',
      'WWAN / M.2 SSD': 'WWAN upgradable',
      'SimCard': 'None',
      'Smart Card Reader / M.2 SSD': '16GB SSD',
      'Camera': '720p',
      'BacklitKeyboard': 'None',
      'FingerprintReader': 'Fingerprint Reader',
      'NFC': 'None',
      'Battery Cells (internal + external)': '3-cell (23.5Wh) + 6-cell (47.5wh)',
      'PowerAdapter': '45W',
      'Preload': 'Windows 8.1 DG Windows 7 Pro 64',
      'BaseWarranty': '3-year depot',
      'Global': 'No',
      'AnnDate': '02/14',
    };
    const expected = {
      'Model': '20B6007T++',
      'Product': 'T440',
      'Region': 'WE',
      'MachineType': '20B6',
      'TopSeller': true,
      'Processor': 'i5-4200U (2C, 1.6 / 2.6GHz, 3MB, 1600MHz)',
      'vPro': false,
      'Graphics': 'Intel HD Graphics 4400',
      'Memory (soldered + DIMM)': '0+4GB',
      'Display': '14" HD (1366x768)',
      'MultiTouch': false,
      'Storage': '500GB 7200rpm',
      'Optical': false,
      'WLAN & Bluetooth': 'Intel 7260 b/g/n + BT4.0',
      'WWAN / M.2 SSD': 'WWAN upgradable',
      'SimCard': false,
      'Smart Card Reader / M.2 SSD': '16GB SSD',
      'Camera': '720p',
      'BacklitKeyboard': false,
      'FingerprintReader': true,
      'NFC': false,
      'Battery Cells (internal + external)': '3-cell (23.5Wh) + 6-cell (47.5wh)',
      'PowerAdapter': '45W',
      'Preload': 'Windows 8.1 DG Windows 7 Pro 64',
      'BaseWarranty': '3-year depot',
      'Global': false,
      'AnnDate': '02/14',
    };

    // Act
    const actual = keysToBoolean(data);

    // Assert
    assertEquals(actual, expected);
  });
});
