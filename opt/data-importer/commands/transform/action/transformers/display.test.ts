import { assertEquals } from 'jsr:@std/assert';
import { describe, it } from 'jsr:@std/testing/bdd';
import { Display, toDisplay } from './display.ts';

describe('toDisplay', () => {
  it('should return an empty string for undefined input', () => {
    // Arrange
    const input = '';

    // Act
    const result = toDisplay(input);

    // Assert
    assertEquals(result, {} as Display);
  });

  it('should parse display size and resolution (with name) correctly', () => {
    // Arrange
    const input = '14" FHD (1920x1080)';

    // Act
    const result = toDisplay(input);

    // Assert
    assertEquals(result?.size, '14');
    assertEquals(result?.resolution.name, 'FHD');
    assertEquals(result?.resolution.width, 1920);
    assertEquals(result?.resolution.height, 1080);
  });

  it('should parse display size, resolution and panel type correctly', () => {
    // Arrange
    const input = '14" FHD (1920x1080) IPS';

    // Act
    const result = toDisplay(input);

    // Assert
    assertEquals(result?.size, '14');
    assertEquals(result?.resolution.name, 'FHD');
    assertEquals(result?.resolution.width, 1920);
    assertEquals(result?.resolution.height, 1080);
    assertEquals(result?.panelType, 'IPS');
  });

  it('shoyld parse the brightness value and unit', () => {
    // Arrange
    const input = '14" FHD (1920x1080) WVA 250nits';

    // Act
    const result = toDisplay(input);

    // Assert
    assertEquals(result?.size, '14');
    assertEquals(result?.resolution.name, 'FHD');
    assertEquals(result?.resolution.width, 1920);
    assertEquals(result?.resolution.height, 1080);
    assertEquals(result?.panelType, 'WVA');
    assertEquals(result?.brightness, { value: '250', unit: 'nits' });
  });

  it('should handle anti-glare displays', () => {
    // Arrange
    const input = '14" FHD (1920x1080) WVA 250nits Anti-glare';

    // Act
    const result = toDisplay(input);

    // Assert
    assertEquals(result?.size, '14');
    assertEquals(result?.resolution.name, 'FHD');
    assertEquals(result?.resolution.width, 1920);
    assertEquals(result?.resolution.height, 1080);
    assertEquals(result?.panelType, 'WVA');
    assertEquals(result?.brightness, { value: '250', unit: 'nits' });
    assertEquals(result?.antiGlare, true);
  });
});
