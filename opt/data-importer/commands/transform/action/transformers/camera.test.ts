import { assertEquals } from 'jsr:@std/assert';
import { describe, it } from 'jsr:@std/testing/bdd';
import { Camera, toCamera } from './camera.ts';

describe('toCamera', () => {
  it('should return an empty object for undefined input', () => {
    // Arrange
    const input = 'None';

    // Act
    const result = toCamera(input);

    // Assert
    assertEquals(result, {} as Camera);
  });

  it('should parse basic camera', () => {
    // Arrange
    const input = '720p';

    // Act
    const result = toCamera(input);

    // Assert
    assertEquals(
      result,
      { resolution: '720p', infrared: false, thinkShutter: false } as Camera,
    );
  });

  it('should parse camera with Infrared', () => {
    // Arrange
    const input = '720p + IR';

    // Act
    const result = toCamera(input);

    // Assert
    assertEquals(
      result,
      { resolution: '720p', infrared: true, thinkShutter: false } as Camera,
    );
  });

  it('should parse camera with infrared and without ThinkShutter', () => {
    // Arrange
    const input = '720p + IR without ThinkShutter';

    // Act
    const result = toCamera(input);

    // Assert
    assertEquals(
      result,
      { resolution: '720p', infrared: true, thinkShutter: false } as Camera,
    );
  });

  it('should parse camera with ThinkShutter', () => {
    // Arrange
    const input = '720p with ThinkShutter';

    // Act
    const result = toCamera(input);

    // Assert
    assertEquals(
      result,
      { resolution: '720p', infrared: false, thinkShutter: true } as Camera,
    );
  });
});
