import { assertEquals } from 'jsr:@std/assert';
import { describe, it } from 'jsr:@std/testing/bdd';
import { BatteryCells, toBatteryCells } from './battery-cells.ts';

describe('toBatteryCells', () => {
  it('should return an empty object for undefined input', () => {
    // Arrange
    const input = '';

    // Act
    const result = toBatteryCells(input);

    // Assert
    assertEquals(result, {} as BatteryCells);
  });

  it('should parse internal battery cells correctly', () => {
    // Arrange
    const input = '6-cell (60Wh) + 4-cell (40Wh)';

    // Act
    const result = toBatteryCells(input);

    // Assert
    assertEquals(result.internal.cells, 6);
    assertEquals(result.internal.type, { value: 60, unit: 'Wh' });
  });

  it('should parse external battery cells correctly', () => {
    // Arrange
    const input = '6-cell (60Wh) + 4-cell (40Wh)';

    // Act
    const result = toBatteryCells(input);

    // Assert
    assertEquals(result.external?.cells, 4);
    assertEquals(result.external?.type, { value: 40, unit: 'Wh' });
  });

  it('should handle only internal battery cells', () => {
    // Arrange
    const input = '8-cell (80Wh)';

    // Act
    const result = toBatteryCells(input);

    // Assert
    assertEquals(result.internal.cells, 8);
    assertEquals(result.internal.type, { value: 80, unit: 'Wh' });
  });

  it('should handle only external battery cells', () => {
    // Arrange
    const input = '+ 2-cell (20Wh)';

    // Act
    const result = toBatteryCells(input);

    // Assert
    assertEquals(result.external?.cells, 2);
    assertEquals(result.external?.type, { value: 20, unit: 'Wh' });
  });
});
