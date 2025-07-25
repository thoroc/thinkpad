import { assertEquals } from 'jsr:@std/assert';
import { describe, it } from 'jsr:@std/testing/bdd';
import { toMultiTouch } from './multi-touch.ts';

describe('toMultiTouch', () => {
  it('should return false for "NO"', () => {
    // Arrange
    const input = 'NO';

    // Act
    const result = toMultiTouch(input);

    // Assert
    assertEquals(result, false);
  });

  it('should return true for "YES"', () => {
    // Arrange
    const input = 'YES';

    // Act
    const result = toMultiTouch(input);

    // Assert
    assertEquals(result, true);
  });

  it('should return "UNKNOWN" for an unrecognized value', () => {
    // Arrange
    const input = 'UNKNOWN';

    // Act
    const result = toMultiTouch(input);

    // Assert
    assertEquals(result, 'UNKNOWN');
  });
});
