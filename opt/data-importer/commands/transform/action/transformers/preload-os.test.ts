import { assertEquals } from 'jsr:@std/assert';
import { describe, it } from 'jsr:@std/testing/bdd';
import testCases from './preload-os.fixtures.json' with { type: 'json' };
import { PreloadedOS, toPreloadedOS } from './preload-os.ts';

describe('toPreloadedOS', () => {
  for (
    const { input, expected } of (testCases as Array<{ input: string; expected: PreloadedOS[] }>)
  ) {
    it(`should parse "${input}" correctly`, () => {
      // Act
      const result = toPreloadedOS(input);

      // Assert
      assertEquals(result, expected as PreloadedOS[]);
    });
  }
});
