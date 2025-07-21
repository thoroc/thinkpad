import { assertEquals, assertThrows } from 'jsr:@std/assert';
import { describe, it } from 'jsr:@std/testing/bdd';
import { transformToProcessor } from './processor.ts';

describe('transformToProcessor', () => {
  it('should transform i5-4200U (2C, 1.6 / 2.6GHz, 3MB, 1600MHz) to processor', () => {
    // Arrange
    const source = 'i5-4200U (2C, 1.6 / 2.6GHz, 3MB, 1600MHz)';
    const expected = {
      name: 'i5-4200U',
      cores: 2,
      hyperThreading: false,
      speed: {
        min: '1.6 Ghz',
        max: '2.6 Ghz',
      },
      cache: '3Mb',
    };

    // Act
    const result = transformToProcessor(source);

    // Assert
    assertEquals(result, expected);
  });

  it('should transform i7-4700MQ (4C, 2.4 / 3.4GHz, 6MB, 1600MHz) to processor', () => {
    // Arrange
    const source = 'i7-4700MQ (4C, 2.4 / 3.4GHz, 6MB, 1600MHz)';
    const expected = {
      name: 'i7-4700MQ',
      cores: 4,
      hyperThreading: false,
      speed: {
        min: '2.4 Ghz',
        max: '3.4 Ghz',
      },
      cache: '6Mb',
    };

    // Act
    const result = transformToProcessor(source);

    // Assert
    assertEquals(result, expected);
  });

  it('should transforn Core i5-7300HQ (4C, 2.5 / 3.5GHz, 6MB) to processor', () => {
    // Arrange
    const source = 'Core i5-7300HQ (4C, 2.5 / 3.5GHz, 6MB)';
    const expected = {
      name: 'Core i5-7300HQ',
      cores: 4,
      hyperThreading: false,
      speed: {
        min: '2.5 Ghz',
        max: '3.5 Ghz',
      },
      cache: '6Mb',
    };

    // Act
    const result = transformToProcessor(source);

    // Assert
    assertEquals(result, expected);
  });

  it('should transform Intel Core i5-8250U (4C / 8T, 1.6 / 3.4GHz, 6MB) to processor', () => {
    // Arrange
    const source = 'Intel Core i5-8250U (4C / 8T, 1.6 / 3.4GHz, 6MB)';
    const expected = {
      name: 'Intel Core i5-8250U',
      cores: 4,
      hyperThreading: true,
      speed: {
        min: '1.6 Ghz',
        max: '3.4 Ghz',
      },
      cache: '6Mb',
    };

    // Act
    const result = transformToProcessor(source);

    // Assert
    assertEquals(result, expected);
  });

  it('should throw error for invalid source', () => {
    // Arrange
    const source = 'invalid source';

    // Act
    const act = () => transformToProcessor(source);

    // Assert
    assertThrows(act);
  });
});
