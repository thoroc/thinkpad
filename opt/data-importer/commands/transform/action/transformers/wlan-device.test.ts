import { assertEquals } from 'jsr:@std/assert';
import { describe, it } from 'jsr:@std/testing/bdd';
import { toWLANDevice, WLANDevice } from './wlan-device.ts';

describe('toWLANDevice', () => {
  it('should return an empty string for undefined input', () => {
    // Arrange
    const input = '';

    // Act
    const result = toWLANDevice(input);

    // Assert
    assertEquals(result, {} as WLANDevice);
  });

  it('should parse a single WLAN device correctly', () => {
    // Arrange
    const input = 'Intel Wi-Fi 6 AX201';

    // Act
    const result = toWLANDevice(input);

    // Assert
    assertEquals(result.vendor, 'Intel');
    assertEquals(result.standard, 'Wi-Fi 6 AX201');
  });
});
