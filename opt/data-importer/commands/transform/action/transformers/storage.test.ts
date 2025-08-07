import { assertEquals } from 'jsr:@std/assert';
import { describe, it } from 'jsr:@std/testing/bdd';
import testCases from './storage.fixtures.json' with { type: 'json' };
import { Storage, toStorage } from './storage.ts';

describe('toStorage', () => {
  for (const { input, expected } of (testCases as Array<{
    input: string;
    expected: Storage[];
  }>) ) {
    it(`should transform "${input}" correctly`, () => {
      const result = toStorage(input);
      assertEquals(result, expected as Storage[]);
    });
  }
});
