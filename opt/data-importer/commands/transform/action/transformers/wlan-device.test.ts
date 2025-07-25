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

  it('should parse a single WLAN device correctly, with antenna', () => {
    // Arrange
    const input = 'Intel 8260 ac, 2x2 + BT4.1';

    // Act
    const result = toWLANDevice(input);

    console.log(result);

    // Assert
    assertEquals(result.vendor, 'Intel');
    assertEquals(result.chipset, '8260');
    assertEquals(result.standard, ['ac']);
    assertEquals(result.antenna, '2x2');
  });

  it('should parse a single WLAN device correctly, with an alpha-numeric standard', () => {
    // Arrange
    const input = 'Intel 8265 11ac, 2x2 + BT4.1';

    // Act
    const result = toWLANDevice(input);

    // Assert
    assertEquals(result.vendor, 'Intel');
    assertEquals(result.chipset, '8265');
    assertEquals(result.standard, ['11ac']);
    assertEquals(result.antenna, '2x2');
  });

  it('should parse a single WLAN device correctly, without antenna', () => {
    // Arrange
    const input = 'Intel 7260 ac + BT4.0';

    // Act
    const result = toWLANDevice(input);

    // Assert
    assertEquals(result.vendor, 'Intel');
    assertEquals(result.chipset, '7260');
    assertEquals(result.standard, ['ac']);
    assertEquals(result.antenna, undefined);
  });

  it('should parse a single WLAN device with multiple standards', () => {
    // Arrange
    const input = 'Intel 7260 b/g/n + BT4.0';

    // Act
    const result = toWLANDevice(input);

    // Assert
    assertEquals(result.vendor, 'Intel');
    assertEquals(result.chipset, '7260');
    assertEquals(result.standard, ['b', 'g', 'n']);
    assertEquals(result.antenna, undefined);
  });
});
