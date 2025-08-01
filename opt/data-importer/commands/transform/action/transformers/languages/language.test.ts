import { assertEquals } from 'jsr:@std/assert';
import { describe, it } from 'jsr:@std/testing/bdd';
import testCasesCodeToLanguage from './language.fixtures.code-to-language.json' with {
  type: 'json',
};
import testCasesNameToLanguage from './language.fixtures.name-to-language.json' with {
  type: 'json',
};
import { Language, toLanguage } from './language.ts';

describe('toLanguage', () => {
  describe('with name', () => {
    for (
      const { input, expected } of (testCasesNameToLanguage as Array<
        { input: string; expected: Language }
      >)
    ) {
      it(`should convert "${input}" to Language`, () => {
        // Act
        const result = toLanguage({ name: input });

        // Assert
        assertEquals(result, expected);
      });
    }
  });
  describe('with code', () => {
    for (
      const { input, expected } of (testCasesCodeToLanguage as Array<
        { input: string; expected: Language }
      >)
    ) {
      it(`should convert "${input}" to Language`, () => {
        // Act
        const result = toLanguage({ code: input });

        // Assert
        assertEquals(result, expected);
      });
    }
  });
});
