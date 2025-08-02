import { assertEquals } from 'jsr:@std/assert';
import { describe, it } from 'jsr:@std/testing/bdd';
import { getUnits } from './get-unit.ts';

describe('getUnits', () => {
  it('should return the correct unit for 8GB', () => {
    // Arrange
    const input = '8GB';

    // Act
    const result = getUnits(input);

    // Assert
    assertEquals(result, ['GB']);
  });

  it('should return the correct unit for 16MB', () => {
    // Arrange
    const input = '16MB';

    // Act
    const result = getUnits(input);

    // Assert
    assertEquals(result, ['MB']);
  });

  it("should return both units for '4GB 512MB'", () => {
    // Arrange
    const input = '4GB 512MB';

    // Act
    const result = getUnits(input);

    // Assert
    assertEquals(result, ['GB', 'MB']);
  });

  it("should return one unit for '2GB 128GB'", () => {
    // Arrange
    const input = '2GB 128GB';

    // Act
    const result = getUnits(input);

    // Assert
    assertEquals(result, ['GB']);
  });

  it("should return one unit for '2Gb, 128GB'", () => {
    // Arrange
    const input = '2Gb, 128GB';

    // Act
    const result = getUnits(input);

    // Assert
    assertEquals(result, ['GB']);
  });

  it('should return empty array for unsupported values', () => {
    // Arrange
    const input = '0';

    // Act
    const result = getUnits(input);

    // Assert
    assertEquals(result, []);
  });

  it('should return empty array for negative values', () => {
    // Arrange
    const input = '-4';

    // Act
    const result = getUnits(input);

    // Assert
    assertEquals(result, []);
  });
});
