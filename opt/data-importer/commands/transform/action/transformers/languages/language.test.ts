import { assertEquals } from 'jsr:@std/assert';
import { describe, it } from 'jsr:@std/testing/bdd';
import { Language, toLanguage } from './language.ts';

describe('toLanguage', () => {
  describe('with name', () => {
    const testCases: Array<{ input: string; expected: Language }> = [
      { input: 'Arabic', expected: { name: 'Arabic', code: 'ar' } },
      {
        input: 'Portuguese (Brazil)',
        expected: { name: 'Portuguese', code: 'pt' },
      },
      { input: 'Chinese', expected: { name: 'Chinese', code: 'zh' } },
      { input: 'Czech', expected: { name: 'Czech', code: 'cs' } },
      { input: 'Danish', expected: { name: 'Danish', code: 'dk' } },
      { input: 'Dutch', expected: { name: 'Dutch', code: 'nl' } },
      { input: 'English', expected: { name: 'English', code: 'en' } },
      { input: 'French', expected: { name: 'French', code: 'fr' } },
      { input: 'German', expected: { name: 'German', code: 'de' } },
      { input: 'Greek', expected: { name: 'Greek', code: 'el' } },
      { input: 'Hebrew', expected: { name: 'Hebrew', code: 'he' } },
      { input: 'Hungarian', expected: { name: 'Hungarian', code: 'hu' } },
      { input: 'Italian', expected: { name: 'Italian', code: 'it' } },
      { input: 'Japanese', expected: { name: 'Japanese', code: 'ja' } },
      { input: 'Korean', expected: { name: 'Korean', code: 'ko' } },
      { input: 'Norwegian', expected: { name: 'Norwegian', code: 'no' } },
      { input: 'Polish', expected: { name: 'Polish', code: 'pl' } },
      { input: 'Portuguese', expected: { name: 'Portuguese', code: 'pt' } },
      { input: 'Romanian', expected: { name: 'Romanian', code: 'ro' } },
      { input: 'Russian', expected: { name: 'Russian', code: 'ru' } },
      { input: 'Serbian', expected: { name: 'Serbian', code: 'sr' } },
      { input: 'Slovak', expected: { name: 'Slovak', code: 'sk' } },
      { input: 'Spanish', expected: { name: 'Spanish', code: 'es' } },
      { input: 'Swedish', expected: { name: 'Swedish', code: 'sv' } },
      { input: 'Turkish', expected: { name: 'Turkish', code: 'tr' } },
      { input: 'Ukrainian', expected: { name: 'Ukrainian', code: 'uk' } },
      { input: 'Vietnamese', expected: { name: 'Vietnamese', code: 'vi' } },
    ];

    testCases.forEach(({ input, expected }) => {
      it(`should convert "${input}" to Language`, () => {
        // Act
        const result = toLanguage({ name: input });

        // Assert
        assertEquals(result, expected);
      });
    });
  });
  describe('with code', () => {
    const testCases: Array<{ input: string; expected: Language }> = [
      { input: 'ar', expected: { name: 'Arabic', code: 'ar' } },
      { input: 'zh', expected: { name: 'Chinese', code: 'zh' } },
      { input: 'cs', expected: { name: 'Czech', code: 'cs' } },
      { input: 'dk', expected: { name: 'Danish', code: 'dk' } },
      { input: 'nl', expected: { name: 'Dutch', code: 'nl' } },
      { input: 'en', expected: { name: 'English', code: 'en' } },
      { input: 'fr', expected: { name: 'French', code: 'fr' } },
      { input: 'de', expected: { name: 'German', code: 'de' } },
      { input: 'gr', expected: { name: 'Greek', code: 'gr' } },
      { input: 'el', expected: { name: 'Greek', code: 'el' } },
      { input: 'he', expected: { name: 'Hebrew', code: 'he' } },
      { input: 'hu', expected: { name: 'Hungarian', code: 'hu' } },
      { input: 'it', expected: { name: 'Italian', code: 'it' } },
      { input: 'ja', expected: { name: 'Japanese', code: 'ja' } },
      { input: 'ko', expected: { name: 'Korean', code: 'ko' } },
      { input: 'no', expected: { name: 'Norwegian', code: 'no' } },
      { input: 'pl', expected: { name: 'Polish', code: 'pl' } },
      { input: 'pt', expected: { name: 'Portuguese', code: 'pt' } },
      { input: 'ro', expected: { name: 'Romanian', code: 'ro' } },
      { input: 'ru', expected: { name: 'Russian', code: 'ru' } },
      { input: 'sr', expected: { name: 'Serbian', code: 'sr' } },
      { input: 'sk', expected: { name: 'Slovak', code: 'sk' } },
      { input: 'es', expected: { name: 'Spanish', code: 'es' } },
      { input: 'sv', expected: { name: 'Swedish', code: 'sv' } },
      { input: 'tr', expected: { name: 'Turkish', code: 'tr' } },
      { input: 'uk', expected: { name: 'Ukrainian', code: 'uk' } },
      { input: 'vi', expected: { name: 'Vietnamese', code: 'vi' } },
    ];

    testCases.forEach(({ input, expected }) => {
      it(`should convert "${input}" to Language`, () => {
        // Act
        const result = toLanguage({ code: input });

        // Assert
        assertEquals(result, expected);
      });
    });
  });
});
