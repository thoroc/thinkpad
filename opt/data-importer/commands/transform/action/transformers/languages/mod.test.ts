import { assertEquals } from 'jsr:@std/assert';
import { describe, it } from 'jsr:@std/testing/bdd';
import testCases from './mod.fixtures.json' with {
  type: 'json',
};
import { Languages, toLanguages } from './mod.ts';

describe('toLanguages', () => {
  for (
    const { input, expected } of (testCases as Array<{ input: string; expected: Languages }>)
  ) {
    it(`should parse "${input}" correctly`, () => {
      // Act
      const result = toLanguages(input);

      // Assert
      assertEquals(result, expected);
    });
  }
});
