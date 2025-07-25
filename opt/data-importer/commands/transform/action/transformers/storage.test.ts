import { assertEquals } from 'jsr:@std/assert';
import { describe, it } from 'jsr:@std/testing/bdd';
import { Storage, toStorage } from './storage.ts';

describe('toStorage', () => {
  it('should return an empty string for undefined input', () => {
    // Arrange
    const input = '';

    // Act
    const result = toStorage(input);

    // Assert
    assertEquals(result, {} as Storage);
  });

  it('should handle a legacy hard drive string', () => {
    // Arrange
    const input = '500GB HDD 5400rpm';

    // Act
    const result = toStorage(input);

    // Assert
    assertEquals(result.type, { name: 'HDD' });
    assertEquals(result.size.value, 500);
    assertEquals(result.size.unit, 'GB');
    assertEquals(result.speed, 5400);
  });

  it('should handle a SSD string', () => {
    // Arrange
    const input = '180GB SSD Opal';

    // Act
    const result = toStorage(input);

    // Assert
    assertEquals(result.type, { name: 'SSD', type: 'Opal' });
    assertEquals(result.size.value, 180);
    assertEquals(result.size.unit, 'GB');
  });

  it('should handle a SSD with connector and type', () => {
    // Arrange
    const input = '256GB SSD M.2 NVMe';

    // Act
    const result = toStorage(input);

    // Assert
    assertEquals(result.type, { name: 'SSD', connector: 'M.2', type: 'NVMe' });
    assertEquals(result.size.value, 256);
    assertEquals(result.size.unit, 'GB');
  });

  it('should handle a hybrid storage string (1)', () => {
    // Arrange
    const input = '500GB HDD + 8GB SSD';

    // Act
    const result = toStorage(input);

    // Assert
    assertEquals(result.type, { name: 'HDD' });
    assertEquals(result.size.value, 500);
    assertEquals(result.size.unit, 'GB');
    assertEquals(result.hybrid, true);
    assertEquals(result.cache?.value, 8);
    assertEquals(result.cache?.unit, 'GB');
  });

  it('should handle a hybrid storage string (2)', () => {
    // Arrange
    const input = '500GB (8GB) SSHD 5400rpm';

    // Act
    const result = toStorage(input);

    // Assert
    assertEquals(result.type, { name: 'SSHD' });
    assertEquals(result.size.value, 500);
    assertEquals(result.size.unit, 'GB');
    assertEquals(result.speed, 5400);
    assertEquals(result.cache?.value, 8);
    assertEquals(result.cache?.unit, 'GB');
  });
});
