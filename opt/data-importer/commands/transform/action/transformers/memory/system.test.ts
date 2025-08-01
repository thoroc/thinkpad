import { assertEquals } from 'jsr:@std/assert';
import { describe, it } from 'jsr:@std/testing/bdd';
import testCases from './system.fixtures.json' with {
  type: 'json',
};
import { SystemMemory, toSystemMemory } from './system.ts';

describe('toSystemMemory', () => {
  for (
    const { input, expected } of (testCases as Array<{
      input: string;
      expected: SystemMemory;
    }>)
  ) {
    it(`should parse "${input}" correctly`, () => {
      // Arrange & Act
      const result = toSystemMemory(input);

      // Assert
      assertEquals(result, expected);
    });
  }
});
