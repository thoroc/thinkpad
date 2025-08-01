import { assertEquals } from 'jsr:@std/assert';
import { describe, it } from 'jsr:@std/testing/bdd';
import testCases from './camera.fixtures.json' with { type: 'json' };
import { Camera, toCamera } from './camera.ts';

describe('toCamera', () => {
  for (
    const { input, expected } of (testCases as Array<{ input: string; expected: Camera }>)
  ) {
    it(`should parse "${input}" correctly`, () => {
      // Act
      const result = toCamera(input);

      // Assert
      assertEquals(result, expected);
    });
  }
});
