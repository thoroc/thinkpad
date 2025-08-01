import { assertEquals } from 'jsr:@std/assert';
import { describe, it } from 'jsr:@std/testing/bdd';
import testCases from './warranty.fixtures.json' with { type: 'json' };
import { toWarranty, Warranty } from './warranty.ts';

describe('toWarranty', () => {
  for (
    const { input, expected } of (testCases as Array<{ input: string; expected: Warranty }>)
  ) {
    it(`should handle ${input}`, () => {
      // Act
      const result = toWarranty(input);

      // Assert
      assertEquals(result, expected as Warranty);
    });
  }
});
