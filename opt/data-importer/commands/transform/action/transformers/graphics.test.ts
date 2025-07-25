import { assertEquals } from 'jsr:@std/assert';
import { describe, it } from 'jsr:@std/testing/bdd';
import { Graphics, toGraphics } from './graphics.ts';

describe('toGraphics', () => {
  it('should return an empty object for undefined input', () => {
    // Arrange
    const input = '';

    // Act
    const result = toGraphics(input);

    // Assert
    assertEquals(result, {} as Graphics);
  });

  it('should parse graphics', () => {
    // Arrange
    const input = 'NVIDIA GeForce GTX 1050';

    // Act
    const result = toGraphics(input);

    // Assert
    assertEquals(result.vendor, 'NVIDIA');
    assertEquals(result.model, 'GeForce GTX 1050');
  });

  it('should parse graphics with memory', () => {
    // Arrange
    const input = 'NVIDIA GeForce GTX 1050 (4GB)';

    // Act
    const result = toGraphics(input);

    // Assert
    assertEquals(result.vendor, 'NVIDIA');
    assertEquals(result.model, 'GeForce GTX 1050');
    assertEquals(result.memory, { value: '4', unit: 'GB' });
  });

  it('It should parse graphics with prefix', () => {
    // Arrange
    const input = 'Integrated Intel HD Graphics 620';

    // Act
    const result = toGraphics(input);

    // Assert
    assertEquals(result.vendor, 'Intel');
    assertEquals(result.model, 'HD Graphics 620');
  });
});
