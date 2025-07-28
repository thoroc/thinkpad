import { assertEquals } from 'jsr:@std/assert';
import { describe, it } from 'jsr:@std/testing/bdd';
import { Languages, toLanguages } from './mod.ts';

describe('toLanguages', () => {
  const testCases: Array<{ input: string; expected: Languages }> = [
    // None
    {
      input: 'None',
      expected: {} as Languages,
    },
    // English
    {
      input: 'English',
      expected: { values: [{ name: 'English', code: 'en' }] },
    },
    // Japanese
    {
      input: 'Japanese',
      expected: { values: [{ name: 'Japanese', code: 'ja' }] },
    },
    // Arabic / English
    {
      input: 'Arabic / English',
      expected: {
        values: [
          { name: 'Arabic', code: 'ar' },
          { name: 'English', code: 'en' },
        ],
      },
    },
    // Croatian / English / Slovenian
    {
      input: 'Croatian / English / Slovenian',
      expected: {
        values: [
          { name: 'Croatian', code: 'hr' },
          { name: 'English', code: 'en' },
          { name: 'Slovenian', code: 'sl' },
        ],
      },
    },
    // Czech / English
    {
      input: 'Czech / English',
      expected: {
        values: [
          { name: 'Czech', code: 'cs' },
          { name: 'English', code: 'en' },
        ],
      },
    },
    // French
    {
      input: 'French',
      expected: { values: [{ name: 'French', code: 'fr' }] },
    },
    // German
    {
      input: 'German',
      expected: { values: [{ name: 'German', code: 'de' }] },
    },
    // Greek / English
    {
      input: 'Greek / English',
      expected: {
        values: [
          { name: 'Greek', code: 'el' },
          { name: 'English', code: 'en' },
        ],
      },
    },
    // Hebrew / English
    {
      input: 'Hebrew / English',
      expected: {
        values: [
          { name: 'Hebrew', code: 'he' },
          { name: 'English', code: 'en' },
        ],
      },
    },
    // Hungarian / English
    {
      input: 'Hungarian / English',
      expected: {
        values: [
          { name: 'Hungarian', code: 'hu' },
          { name: 'English', code: 'en' },
        ],
      },
    },
    // Nordic (DK/FI/SV/NO/EN)
    {
      input: 'Nordic (DK/FI/SV/NO/EN)',
      expected: {
        values: [
          { name: 'Danish', code: 'dk' },
          { name: 'Finnish', code: 'fi' },
          { name: 'Swedish', code: 'sv' },
          { name: 'Norwegian', code: 'no' },
          { name: 'English', code: 'en' },
        ],
        family: 'Nordic',
      },
    },
    // Polish / English
    {
      input: 'Polish / English',
      expected: {
        values: [
          { name: 'Polish', code: 'pl' },
          { name: 'English', code: 'en' },
        ],
      },
    },
    // Portuguese (Brazil)
    {
      input: 'Portuguese (Brazil)',
      expected: {
        values: [{ name: 'Portuguese', code: 'pt', region: 'Brazil' }],
      },
    },
    // Portuguese / English
    {
      input: 'Portuguese / English',
      expected: {
        values: [
          { name: 'Portuguese', code: 'pt' },
          { name: 'English', code: 'en' },
        ],
      },
    },
    // Romanian / English
    {
      input: 'Romanian / English',
      expected: {
        values: [
          { name: 'Romanian', code: 'ro' },
          { name: 'English', code: 'en' },
        ],
      },
    },
    // Russian
    {
      input: 'Russian',
      expected: { values: [{ name: 'Russian', code: 'ru' }] },
    },
    // Serbian / English
    {
      input: 'Serbian / English',
      expected: {
        values: [
          { name: 'Serbian', code: 'sr' },
          { name: 'English', code: 'en' },
        ],
      },
    },
    // Slovak / English
    {
      input: 'Slovak / English',
      expected: {
        values: [
          { name: 'Slovak', code: 'sk' },
          { name: 'English', code: 'en' },
        ],
      },
    },
    // Spanish
    {
      input: 'Spanish',
      expected: { values: [{ name: 'Spanish', code: 'es' }] },
    },
    // Turkish / English
    {
      input: 'Turkish / English',
      expected: {
        values: [
          { name: 'Turkish', code: 'tr' },
          { name: 'English', code: 'en' },
        ],
      },
    },
    // WE (EN/FR/DE/NL/IT)
    {
      input: 'WE (EN/FR/DE/NL/IT)',
      expected: {
        values: [
          { name: 'English', code: 'en' },
          { name: 'French', code: 'fr' },
          { name: 'German', code: 'de' },
          { name: 'Dutch', code: 'nl' },
          { name: 'Italian', code: 'it' },
        ],
        family: 'Western European',
      },
    },
    // Croatian / English / Slovenian
    {
      input: 'Croatian / English / Slovenian',
      expected: {
        values: [
          { name: 'Croatian', code: 'hr' },
          { name: 'English', code: 'en' },
          { name: 'Slovenian', code: 'sl' },
        ],
      },
    },
  ];

  for (const { input, expected } of testCases) {
    it(`should parse "${input}" correctly`, () => {
      // Act
      const result = toLanguages(input);

      // Assert
      assertEquals(result, expected);
    });
  }
});
