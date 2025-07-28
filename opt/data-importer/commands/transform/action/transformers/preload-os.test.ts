import { assertEquals } from 'jsr:@std/assert';
import { describe, it } from 'jsr:@std/testing/bdd';
import { PreloadedOS, toPreloadedOS } from './preload-os.ts';

describe('toPreloadedOS', () => {
  const testCases: Array<{ input: string; expected: PreloadedOS[] }> = [
    // None
    {
      input: 'None',
      expected: [],
    },
    // Windows 10 DG Windows 7 Pro 32, English
    {
      input: 'Windows 10 DG Windows 7 Pro 32, English',
      expected: [
        { name: 'Windows 10', version: 'DG', languages: ['English'] },
        { name: 'Windows 7', version: 'Pro 32', languages: ['English'] },
      ],
    },
    // Windows 10 DG Windows 7 Pro 32, Japanese
    {
      input: 'Windows 10 DG Windows 7 Pro 32, Japanese',
      expected: [
        { name: 'Windows 10', version: 'DG', languages: ['Japanese'] },
        { name: 'Windows 7', version: 'Pro 32', languages: ['Japanese'] },
      ],
    },
    // Windows 10 DG Windows 7 Pro 64
    {
      input: 'Windows 10 DG Windows 7 Pro 64',
      expected: [
        { name: 'Windows 10', version: 'DG', languages: [] },
        { name: 'Windows 7', version: 'Pro 64', languages: [] },
      ],
    },
    // Windows 10 DG Windows 7 Pro 64, Arabic / English
    {
      input: 'Windows 10 DG Windows 7 Pro 64, Arabic / English',
      expected: [
        { name: 'Windows 10', version: 'DG', languages: ['Arabic', 'English'] },
        {
          name: 'Windows 7',
          version: 'Pro 64',
          languages: ['Arabic', 'English'],
        },
      ],
    },
    // Windows 10 DG Windows 7 Pro 64, Croatian / English / Slovenian
    {
      input: 'Windows 10 DG Windows 7 Pro 64, Croatian / English / Slovenian',
      expected: [
        {
          name: 'Windows 10',
          version: 'DG',
          languages: ['Croatian', 'English', 'Slovenian'],
        },
        {
          name: 'Windows 7',
          version: 'Pro 64',
          languages: ['Croatian', 'English', 'Slovenian'],
        },
      ],
    },
    // Windows 10 DG Windows 7 Pro 64, Czech / English
    {
      input: 'Windows 10 DG Windows 7 Pro 64, Czech / English',
      expected: [
        { name: 'Windows 10', version: 'DG', languages: ['Czech', 'English'] },
        {
          name: 'Windows 7',
          version: 'Pro 64',
          languages: ['Czech', 'English'],
        },
      ],
    },
    // Windows 10 DG Windows 7 Pro 64, English
    {
      input: 'Windows 10 DG Windows 7 Pro 64, English',
      expected: [
        { name: 'Windows 10', version: 'DG', languages: ['English'] },
        { name: 'Windows 7', version: 'Pro 64', languages: ['English'] },
      ],
    },
    // Windows 10 DG Windows 7 Pro 64, French
    {
      input: 'Windows 10 DG Windows 7 Pro 64, French',
      expected: [
        { name: 'Windows 10', version: 'DG', languages: ['French'] },
        { name: 'Windows 7', version: 'Pro 64', languages: ['French'] },
      ],
    },
    // Windows 10 DG Windows 7 Pro 64, German
    {
      input: 'Windows 10 DG Windows 7 Pro 64, German',
      expected: [
        { name: 'Windows 10', version: 'DG', languages: ['German'] },
        { name: 'Windows 7', version: 'Pro 64', languages: ['German'] },
      ],
    },
    // Windows 10 DG Windows 7 Pro 64, Greek / English
    {
      input: 'Windows 10 DG Windows 7 Pro 64, Greek / English',
      expected: [
        { name: 'Windows 10', version: 'DG', languages: ['Greek', 'English'] },
        {
          name: 'Windows 7',
          version: 'Pro 64',
          languages: ['Greek', 'English'],
        },
      ],
    },
    // Windows 10 DG Windows 7 Pro 64, Hebrew / English
    {
      input: 'Windows 10 DG Windows 7 Pro 64, Hebrew / English',
      expected: [
        { name: 'Windows 10', version: 'DG', languages: ['Hebrew', 'English'] },
        {
          name: 'Windows 7',
          version: 'Pro 64',
          languages: ['Hebrew', 'English'],
        },
      ],
    },
    // Windows 10 DG Windows 7 Pro 64, Hungarian / English
    {
      input: 'Windows 10 DG Windows 7 Pro 64, Hungarian / English',
      expected: [
        {
          name: 'Windows 10',
          version: 'DG',
          languages: ['Hungarian', 'English'],
        },
        {
          name: 'Windows 7',
          version: 'Pro 64',
          languages: ['Hungarian', 'English'],
        },
      ],
    },
    // Windows 10 DG Windows 7 Pro 64, Japanese
    {
      input: 'Windows 10 DG Windows 7 Pro 64, Japanese',
      expected: [
        { name: 'Windows 10', version: 'DG', languages: ['Japanese'] },
        { name: 'Windows 7', version: 'Pro 64', languages: ['Japanese'] },
      ],
    },
    // Windows 10 DG Windows 7 Pro 64, Nordic (DK/FI/SV/NO/EN)
    {
      input: 'Windows 10 DG Windows 7 Pro 64, Nordic (DK/FI/SV/NO/EN)',
      expected: [
        {
          name: 'Windows 10',
          version: 'DG',
          languages: ['Nordic (DK/FI/SV/NO/EN)'],
        },
        {
          name: 'Windows 7',
          version: 'Pro 64',
          languages: ['Nordic (DK/FI/SV/NO/EN)'],
        },
      ],
    },
    // Windows 10 DG Windows 7 Pro 64, Polish / English
    {
      input: 'Windows 10 DG Windows 7 Pro 64, Polish / English',
      expected: [
        { name: 'Windows 10', version: 'DG', languages: ['Polish', 'English'] },
        {
          name: 'Windows 7',
          version: 'Pro 64',
          languages: ['Polish', 'English'],
        },
      ],
    },
    // Windows 10 DG Windows 7 Pro 64, Portuguese (Brazil)
    {
      input: 'Windows 10 DG Windows 7 Pro 64, Portuguese (Brazil)',
      expected: [
        {
          name: 'Windows 10',
          version: 'DG',
          languages: ['Portuguese (Brazil)'],
        },
        {
          name: 'Windows 7',
          version: 'Pro 64',
          languages: ['Portuguese (Brazil)'],
        },
      ],
    },
    // Windows 10 DG Windows 7 Pro 64, Portuguese / English
    {
      input: 'Windows 10 DG Windows 7 Pro 64, Portuguese / English',
      expected: [
        {
          name: 'Windows 10',
          version: 'DG',
          languages: ['Portuguese', 'English'],
        },
        {
          name: 'Windows 7',
          version: 'Pro 64',
          languages: ['Portuguese', 'English'],
        },
      ],
    },
    // Windows 10 DG Windows 7 Pro 64, Romanian / English
    {
      input: 'Windows 10 DG Windows 7 Pro 64, Romanian / English',
      expected: [
        {
          name: 'Windows 10',
          version: 'DG',
          languages: ['Romanian', 'English'],
        },
        {
          name: 'Windows 7',
          version: 'Pro 64',
          languages: ['Romanian', 'English'],
        },
      ],
    },
    // Windows 10 DG Windows 7 Pro 64, Russian
    {
      input: 'Windows 10 DG Windows 7 Pro 64, Russian',
      expected: [
        { name: 'Windows 10', version: 'DG', languages: ['Russian'] },
        { name: 'Windows 7', version: 'Pro 64', languages: ['Russian'] },
      ],
    },
    // Windows 10 DG Windows 7 Pro 64, Serbian / English
    {
      input: 'Windows 10 DG Windows 7 Pro 64, Serbian / English',
      expected: [
        {
          name: 'Windows 10',
          version: 'DG',
          languages: ['Serbian', 'English'],
        },
        {
          name: 'Windows 7',
          version: 'Pro 64',
          languages: ['Serbian', 'English'],
        },
      ],
    },
    // Windows 10 DG Windows 7 Pro 64, Slovak / English
    {
      input: 'Windows 10 DG Windows 7 Pro 64, Slovak / English',
      expected: [
        { name: 'Windows 10', version: 'DG', languages: ['Slovak', 'English'] },
        {
          name: 'Windows 7',
          version: 'Pro 64',
          languages: ['Slovak', 'English'],
        },
      ],
    },
    // Windows 10 DG Windows 7 Pro 64, Spanish
    {
      input: 'Windows 10 DG Windows 7 Pro 64, Spanish',
      expected: [
        { name: 'Windows 10', version: 'DG', languages: ['Spanish'] },
        { name: 'Windows 7', version: 'Pro 64', languages: ['Spanish'] },
      ],
    },
    // Windows 10 DG Windows 7 Pro 64, Turkish / English
    {
      input: 'Windows 10 DG Windows 7 Pro 64, Turkish / English',
      expected: [
        {
          name: 'Windows 10',
          version: 'DG',
          languages: ['Turkish', 'English'],
        },
        {
          name: 'Windows 7',
          version: 'Pro 64',
          languages: ['Turkish', 'English'],
        },
      ],
    },
    // Windows 10 DG Windows 7 Pro 64, WE (EN/FR/DE/NL/IT)
    {
      input: 'Windows 10 DG Windows 7 Pro 64, WE (EN/FR/DE/NL/IT)',
      expected: [
        {
          name: 'Windows 10',
          version: 'DG',
          languages: ['WE (EN/FR/DE/NL/IT)'],
        },
        {
          name: 'Windows 7',
          version: 'Pro 64',
          languages: ['WE (EN/FR/DE/NL/IT)'],
        },
      ],
    },
    // Windows 10 Home 64
    {
      input: 'Windows 10 Home 64',
      expected: [{ name: 'Windows 10', version: 'Home 64', languages: [] }],
    },
    // Windows 10 Home 64, Arabic / English
    {
      input: 'Windows 10 Home 64, Arabic / English',
      expected: [
        {
          name: 'Windows 10',
          version: 'Home 64',
          languages: ['Arabic', 'English'],
        },
      ],
    },
    // Windows 10 Home 64, Croatian / English / Slovenian
    {
      input: 'Windows 10 Home 64, Croatian / English / Slovenian',
      expected: [
        {
          name: 'Windows 10',
          version: 'Home 64',
          languages: ['Croatian', 'English', 'Slovenian'],
        },
      ],
    },
    // Windows 10 Home 64, Czech / English
    {
      input: 'Windows 10 Home 64, Czech / English',
      expected: [
        {
          name: 'Windows 10',
          version: 'Home 64',
          languages: ['Czech', 'English'],
        },
      ],
    },
    // Windows 10 Home 64, English
    {
      input: 'Windows 10 Home 64, English',
      expected: [
        { name: 'Windows 10', version: 'Home 64', languages: ['English'] },
      ],
    },
    // Windows 10 Home 64, French
    {
      input: 'Windows 10 Home 64, French',
      expected: [
        { name: 'Windows 10', version: 'Home 64', languages: ['French'] },
      ],
    },
    // Windows 10 Home 64, German
    {
      input: 'Windows 10 Home 64, German',
      expected: [
        { name: 'Windows 10', version: 'Home 64', languages: ['German'] },
      ],
    },
    // Windows 10 Home 64, Greek / English
    {
      input: 'Windows 10 Home 64, Greek / English',
      expected: [
        {
          name: 'Windows 10',
          version: 'Home 64',
          languages: ['Greek', 'English'],
        },
      ],
    },
    // Windows 10 Home 64, Hebrew / English
    {
      input: 'Windows 10 Home 64, Hebrew / English',
      expected: [
        {
          name: 'Windows 10',
          version: 'Home 64',
          languages: ['Hebrew', 'English'],
        },
      ],
    },
    // Windows 10 Home 64, Hungarian / English
    {
      input: 'Windows 10 Home 64, Hungarian / English',
      expected: [
        {
          name: 'Windows 10',
          version: 'Home 64',
          languages: ['Hungarian', 'English'],
        },
      ],
    },
    // Windows 10 Home 64, Korean / English
    {
      input: 'Windows 10 Home 64, Korean / English',
      expected: [
        {
          name: 'Windows 10',
          version: 'Home 64',
          languages: ['Korean', 'English'],
        },
      ],
    },
    // Windows 10 Home 64, Nordic (DK/FI/SV/NO/EN)
    {
      input: 'Windows 10 Home 64, Nordic (DK/FI/SV/NO/EN)',
      expected: [
        {
          name: 'Windows 10',
          version: 'Home 64',
          languages: ['Nordic (DK/FI/SV/NO/EN)'],
        },
      ],
    },
    // Windows 10 Home 64, Polish / English
    {
      input: 'Windows 10 Home 64, Polish / English',
      expected: [
        {
          name: 'Windows 10',
          version: 'Home 64',
          languages: ['Polish', 'English'],
        },
      ],
    },
    // Windows 10 Home 64, Portuguese / English
    {
      input: 'Windows 10 Home 64, Portuguese / English',
      expected: [
        {
          name: 'Windows 10',
          version: 'Home 64',
          languages: ['Portuguese', 'English'],
        },
      ],
    },
    // Windows 10 Home 64, Romanian / English
    {
      input: 'Windows 10 Home 64, Romanian / English',
      expected: [
        {
          name: 'Windows 10',
          version: 'Home 64',
          languages: ['Romanian', 'English'],
        },
      ],
    },
    // Windows 10 Home 64, Slovak / English
    {
      input: 'Windows 10 Home 64, Slovak / English',
      expected: [
        {
          name: 'Windows 10',
          version: 'Home 64',
          languages: ['Slovak', 'English'],
        },
      ],
    },
    // Windows 10 Home 64, Spanish
    {
      input: 'Windows 10 Home 64, Spanish',
      expected: [
        { name: 'Windows 10', version: 'Home 64', languages: ['Spanish'] },
      ],
    },
    // Windows 10 Home 64, Traditional Chinese / Simplified Chinese / English
    {
      input: 'Windows 10 Home 64, Traditional Chinese / Simplified Chinese / English',
      expected: [
        {
          name: 'Windows 10',
          version: 'Home 64',
          languages: ['Traditional Chinese', 'Simplified Chinese', 'English'],
        },
      ],
    },
    // Windows 10 Home 64, WE (EN/FR/DE/NL/IT)
    {
      input: 'Windows 10 Home 64, WE (EN/FR/DE/NL/IT)',
      expected: [
        {
          name: 'Windows 10',
          version: 'Home 64',
          languages: ['WE (EN/FR/DE/NL/IT)'],
        },
      ],
    },
    // Windows 10 Pro 64
    {
      input: 'Windows 10 Pro 64',
      expected: [
        { name: 'Windows 10', version: 'Pro 64', languages: [] },
      ],
    },
    // Windows 10 Pro 64, Arabic / English
    {
      input: 'Windows 10 Pro 64, Arabic / English',
      expected: [
        {
          name: 'Windows 10',
          version: 'Pro 64',
          languages: ['Arabic', 'English'],
        },
      ],
    },
    // Windows 10 Pro 64, Croatian / English / Slovenian
    {
      input: 'Windows 10 Pro 64, Croatian / English / Slovenian',
      expected: [
        {
          name: 'Windows 10',
          version: 'Pro 64',
          languages: ['Croatian', 'English', 'Slovenian'],
        },
      ],
    },
    // Windows 10 Pro 64, Czech / English
    {
      input: 'Windows 10 Pro 64, Czech / English',
      expected: [
        {
          name: 'Windows 10',
          version: 'Pro 64',
          languages: ['Czech', 'English'],
        },
      ],
    },
    // Windows 10 Pro 64, English
    {
      input: 'Windows 10 Pro 64, English',
      expected: [
        { name: 'Windows 10', version: 'Pro 64', languages: ['English'] },
      ],
    },
    // Windows 10 Pro 64, French
    {
      input: 'Windows 10 Pro 64, French',
      expected: [
        { name: 'Windows 10', version: 'Pro 64', languages: ['French'] },
      ],
    },
    // Windows 10 Pro 64, German
    {
      input: 'Windows 10 Pro 64, German',
      expected: [
        { name: 'Windows 10', version: 'Pro 64', languages: ['German'] },
      ],
    },
    // Windows 10 Pro 64, Greek / English
    {
      input: 'Windows 10 Pro 64, Greek / English',
      expected: [
        {
          name: 'Windows 10',
          version: 'Pro 64',
          languages: ['Greek', 'English'],
        },
      ],
    },
    // Windows 10 Pro 64, Hebrew / English
    {
      input: 'Windows 10 Pro 64, Hebrew / English',
      expected: [
        {
          name: 'Windows 10',
          version: 'Pro 64',
          languages: ['Hebrew', 'English'],
        },
      ],
    },
    // Windows 10 Pro 64, Hungarian / English
    {
      input: 'Windows 10 Pro 64, Hungarian / English',
      expected: [
        {
          name: 'Windows 10',
          version: 'Pro 64',
          languages: ['Hungarian', 'English'],
        },
      ],
    },
    // Windows 10 Pro 64, Japanese
    {
      input: 'Windows 10 Pro 64, Japanese',
      expected: [
        { name: 'Windows 10', version: 'Pro 64', languages: ['Japanese'] },
      ],
    },
    // Windows 10 Pro 64, Korean / English
    {
      input: 'Windows 10 Pro 64, Korean / English',
      expected: [
        {
          name: 'Windows 10',
          version: 'Pro 64',
          languages: ['Korean', 'English'],
        },
      ],
    },
    // Windows 10 Pro 64, Nordic (DK/FI/SV/NO/EN)
    {
      input: 'Windows 10 Pro 64, Nordic (DK/FI/SV/NO/EN)',
      expected: [
        {
          name: 'Windows 10',
          version: 'Pro 64',
          languages: ['Nordic (DK/FI/SV/NO/EN)'],
        },
      ],
    },
    // Windows 10 Pro 64, Polish / English
    {
      input: 'Windows 10 Pro 64, Polish / English',
      expected: [
        {
          name: 'Windows 10',
          version: 'Pro 64',
          languages: ['Polish', 'English'],
        },
      ],
    },
    // Windows 10 Pro 64, Portuguese (Brazil)
    {
      input: 'Windows 10 Pro 64, Portuguese (Brazil)',
      expected: [
        {
          name: 'Windows 10',
          version: 'Pro 64',
          languages: ['Portuguese (Brazil)'],
        },
      ],
    },
    // Windows 10 Pro 64, Portuguese / English
    {
      input: 'Windows 10 Pro 64, Portuguese / English',
      expected: [
        {
          name: 'Windows 10',
          version: 'Pro 64',
          languages: ['Portuguese', 'English'],
        },
      ],
    },
    // Windows 10 Pro 64, Romanian / English
    {
      input: 'Windows 10 Pro 64, Romanian / English',
      expected: [
        {
          name: 'Windows 10',
          version: 'Pro 64',
          languages: ['Romanian', 'English'],
        },
      ],
    },
    // Windows 10 Pro 64, Russian
    {
      input: 'Windows 10 Pro 64, Russian',
      expected: [
        { name: 'Windows 10', version: 'Pro 64', languages: ['Russian'] },
      ],
    },
    // Windows 10 Pro 64, Serbian / English
    {
      input: 'Windows 10 Pro 64, Serbian / English',
      expected: [
        {
          name: 'Windows 10',
          version: 'Pro 64',
          languages: ['Serbian', 'English'],
        },
      ],
    },
    // Windows 10 Pro 64, Slovak / English
    {
      input: 'Windows 10 Pro 64, Slovak / English',
      expected: [
        {
          name: 'Windows 10',
          version: 'Pro 64',
          languages: ['Slovak', 'English'],
        },
      ],
    },
    // Windows 10 Pro 64, Spanish
    {
      input: 'Windows 10 Pro 64, Spanish',
      expected: [
        { name: 'Windows 10', version: 'Pro 64', languages: ['Spanish'] },
      ],
    },
    // Windows 10 Pro 64, Traditional Chinese / English
    {
      input: 'Windows 10 Pro 64, Traditional Chinese / English',
      expected: [
        {
          name: 'Windows 10',
          version: 'Pro 64',
          languages: ['Traditional Chinese', 'English'],
        },
      ],
    },
    // Windows 10 Pro 64, Traditional Chinese / Simplified Chinese / English
    {
      input: 'Windows 10 Pro 64, Traditional Chinese / Simplified Chinese / English',
      expected: [
        {
          name: 'Windows 10',
          version: 'Pro 64',
          languages: ['Traditional Chinese', 'Simplified Chinese', 'English'],
        },
      ],
    },
    // Windows 10 Pro 64, Turkish / English
    {
      input: 'Windows 10 Pro 64, Turkish / English',
      expected: [
        {
          name: 'Windows 10',
          version: 'Pro 64',
          languages: ['Turkish', 'English'],
        },
      ],
    },
    // Windows 10 Pro 64, WE (EN/FR/DE/NL/IT)
    {
      input: 'Windows 10 Pro 64, WE (EN/FR/DE/NL/IT)',
      expected: [
        {
          name: 'Windows 10',
          version: 'Pro 64',
          languages: ['WE (EN/FR/DE/NL/IT)'],
        },
      ],
    },
    // Windows 8.1 DG Windows 7 Pro 64
    {
      input: 'Windows 8.1 DG Windows 7 Pro 64',
      expected: [
        { name: 'Windows 8.1', version: 'DG', languages: [] },
        { name: 'Windows 7', version: 'Pro 64', languages: [] },
      ],
    },
    // Windows 8.1 Pro 64-bit
    {
      input: 'Windows 8.1 Pro 64-bit',
      expected: [
        { name: 'Windows 8.1', version: 'Pro 64-bit', languages: [] },
      ],
    },
    // Windows 10 DG Windows 7 Pro 64
    {
      input: 'Windows 10 DG Windows 7 Pro 64',
      expected: [
        { name: 'Windows 10', version: 'DG', languages: [] },
        { name: 'Windows 7', version: 'Pro 64', languages: [] },
      ],
    },
    // Windows 10 Pro 64
    {
      input: 'Windows 10 Pro 64',
      expected: [
        { name: 'Windows 10', version: 'Pro 64', languages: [] },
      ],
    },
    // Windows 8 DG Windows 7 Pro 64
    {
      input: 'Windows 8 DG Windows 7 Pro 64',
      expected: [
        { name: 'Windows 8', version: 'DG', languages: [] },
        { name: 'Windows 7', version: 'Pro 64', languages: [] },
      ],
    },
    // Windows 8 Pro 64-bit
    {
      input: 'Windows 8 Pro 64-bit',
      expected: [
        { name: 'Windows 8', version: 'Pro 64-bit', languages: [] },
      ],
    },
    // Windows 8.1 DG Windows 7 Pro 64
    {
      input: 'Windows 8.1 DG Windows 7 Pro 64',
      expected: [
        { name: 'Windows 8.1', version: 'DG', languages: [] },
        { name: 'Windows 7', version: 'Pro 64', languages: [] },
      ],
    },
    // Windows 8.1 Pro 64-bit
    {
      input: 'Windows 8.1 Pro 64-bit',
      expected: [
        { name: 'Windows 8.1', version: 'Pro 64-bit', languages: [] },
      ],
    },
  ];

  for (const { input, expected } of testCases) {
    it(`should parse "${input}" correctly`, () => {
      // Act
      const result = toPreloadedOS(input);

      // Assert
      assertEquals(result, expected as PreloadedOS[]);
    });
  }
});
