import { assertEquals } from 'jsr:@std/assert';
import { describe, it } from 'jsr:@std/testing/bdd';
import testCases from './module.fixtures.json' with { type: 'json' };
import { MemoryModule, toMemoryModule } from './module.ts';

describe('toMemoryModule', () => {
  for (
    const { input, expected } of (testCases as Array<{
      input: string;
      expected: MemoryModule | undefined;
    }>)
  ) {
    it(`should parse "${input}" correctly`, () => {
      // Arrange & Act
      const result = toMemoryModule(input);

      // Assert
      assertEquals(result, expected);
    });
  }
});
