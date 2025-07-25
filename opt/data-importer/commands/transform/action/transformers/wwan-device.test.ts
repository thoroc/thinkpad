import { assertEquals } from 'jsr:@std/assert';
import { describe, it } from 'jsr:@std/testing/bdd';
import { toWWANDevice, WWANDevice } from './wwan-device.ts';

describe('toWWANDevice', () => {
  it('should return an empty object for undefined input', () => {
    // Arrange
    const input = '';

    // Act
    const result = toWWANDevice(input);

    // Assert
    assertEquals(result, {} as WWANDevice);
  });

  it("should return an empty object for 'None'", () => {
    // Arrange
    const input = 'None';

    // Act
    const result = toWWANDevice(input);

    // Assert
    assertEquals(result, {} as WWANDevice);
  });

  it("should return an empty object for 'WWAN Upgradable'", () => {
    // Arrange
    const input = 'WWAN Upgradable';

    // Act
    const result = toWWANDevice(input);

    // Assert
    assertEquals(result, { upgradable: true } as WWANDevice);
  });

  it('should parse vendor and model correctly', () => {
    // Arrange
    const input = 'Ericsson N5321';

    // Act
    const result = toWWANDevice(input);

    // Assert
    assertEquals(result.vendor, 'Ericsson');
    assertEquals(result.model, 'N5321');
  });
});
