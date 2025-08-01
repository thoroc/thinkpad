import { assertEquals } from 'jsr:@std/assert';
import { describe, it } from 'jsr:@std/testing/bdd';
import testCases from './display.fixtures.json' with { type: 'json' };
import { Display, toDisplay } from './display.ts';

describe('toDisplay', () => {
  for (
    const { input, expected } of (testCases as Array<{ input: string; expected: Display }>)
  ) {
    it(`should parse "${input}" correctly`, () => {
      // Act
      const result = toDisplay(input);

      // Assert
      assertEquals(result, expected);
    });
  }
});
