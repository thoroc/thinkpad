import { assertEquals } from 'jsr:@std/assert';
import { describe, it } from 'jsr:@std/testing/bdd';
import testCases from './mod.fixtures.json' with {
  type: 'json',
};
import { Batteries, toBatteries } from './mod.ts';

describe('toBatteries', () => {
  for (
    const { input, expected } of (testCases as Array<{ input: string; expected: Batteries }>)
  ) {
    it(`should parse "${input}" correctly`, () => {
      // Act
      const result = toBatteries(input);

      // Assert
      assertEquals(result, expected);
    });
  }
});
