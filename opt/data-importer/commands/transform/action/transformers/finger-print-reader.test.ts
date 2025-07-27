import { assertEquals } from 'jsr:@std/assert';
import { describe, it } from 'jsr:@std/testing/bdd';
import { FingerprintReader, toFingerprintReader } from './finger-print-reader.ts';

describe('toFingerprintReader', () => {
  it('should parse None', () => {
    // Arrange
    const input = 'None';

    // Act
    const result = toFingerprintReader(input);

    // Assert
    assertEquals(result, { enabled: false } as FingerprintReader);
  });

  it('should parse fingerprint reader', () => {
    // Arrange
    const input = 'Fingerprint Reader';

    // Act
    const result = toFingerprintReader(input);

    // Assert
    assertEquals(result, { enabled: true } as FingerprintReader);
  });

  it('should parse fingerprint reader with model', () => {
    // Arrange
    const input = 'Touch Style, Match-on-Chip';

    // Act
    const result = toFingerprintReader(input);

    // Assert
    assertEquals(result, {
      enabled: true,
      type: 'Touch Style, Match-on-Chip',
    } as FingerprintReader);
  });
});
