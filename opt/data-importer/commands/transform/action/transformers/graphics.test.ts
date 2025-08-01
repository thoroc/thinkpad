import { assertEquals } from 'jsr:@std/assert';
import { describe, it } from 'jsr:@std/testing/bdd';
import testCases from './graphics.fixtures.json' with { type: 'json' };
import { Graphics, toGraphics } from './graphics.ts';

describe('toGraphics', () => {
  for (
    const { input, expected } of (testCases as Array<{ input: string; expected: Graphics }>)
  ) {
    it(`should parse "${input}" correctly`, () => {
      // Act
      const result = toGraphics(input);

      // Assert
      assertEquals(result, expected);
    });
  }
});
