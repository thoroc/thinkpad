import { assertEquals } from 'jsr:@std/assert';
import { describe, it } from 'jsr:@std/testing/bdd';
import { toMemory, toMemoryUnit } from './memory.ts';

describe('toMemoryUnit', () => {
  it('should return undefined for invalid memory unit', () => {
    // Arrange
    const input = '0GB';

    // Act
    const actual = toMemoryUnit(input);

    // Assert
    assertEquals(actual, undefined);
  });

  it('should parse valid memory unit with size and unit', () => {
    // Arrange
    const input = '8GB';
    const expected = { size: 8, unit: 'GB' };

    // Act
    const actual = toMemoryUnit(input);

    // Assert
    assertEquals(actual, expected);
  });

  it('should parse memory unit with DDR type', () => {
    // Arrange
    const input = '16GB DDR4';
    const expected = { size: 16, unit: 'GB', type: 'DDR4' };

    // Act
    const actual = toMemoryUnit(input);

    // Assert
    assertEquals(actual, expected);
  });

  it('should parse memory unit with mixed DDR type', () => {
    // Arrange
    const input = '32 MB DDR4-2400';
    const expected = { size: 32, unit: 'MB', type: 'DDR4-2400' };

    // Act
    const actual = toMemoryUnit(input);

    // Assert
    assertEquals(actual, expected);
  });

  it('should handle memory unit with mixed case', () => {
    // Arrange
    const input = '32 mb ddr3';
    const expected = { size: 32, unit: 'MB', type: 'DDR3' };

    // Act
    const actual = toMemoryUnit(input);

    // Assert
    assertEquals(actual, expected);
  });

  it('should return undefined for empty string', () => {
    // Arrange
    const input = '';

    // Act
    const actual = toMemoryUnit(input);

    // Assert
    assertEquals(actual, undefined);
  });
});

describe('toMemory', () => {
  it('should transform when only one value is provided', () => {
    // Arrange
    const input = '8GB';
    const expected = { soldered: { size: 8, unit: 'GB' } };

    // Act
    const actual = toMemory(input);

    // Assert
    assertEquals(actual, expected);
  });

  it('should transform when both values are provided but soldered value is 0', () => {
    // Arrange
    const input = '0GB+16GB';
    const expected = {
      dimms: { size: 16, unit: 'GB' },
    };

    // Act
    const actual = toMemory(input);

    // Assert
    assertEquals(actual, expected);
  });

  it('should transform when both values are provided but dimms value is 0', () => {
    // Arrange
    const input = '8GB+0GB';
    const expected = {
      soldered: { size: 8, unit: 'GB' },
    };

    // Act
    const actual = toMemory(input);

    // Assert
    assertEquals(actual, expected);
  });

  it('should transform when two values are provided and both are greater than 0', () => {
    // Arrange
    const input = '8GB+16GB';
    const expected = {
      soldered: { size: 8, unit: 'GB' },
      dimms: { size: 16, unit: 'GB' },
    };

    // Act
    const actual = toMemory(input);

    // Assert
    assertEquals(actual, expected);
  });
});
