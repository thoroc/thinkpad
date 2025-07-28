import { assertEquals } from 'jsr:@std/assert';
import { describe, it } from 'jsr:@std/testing/bdd';
import { Languages } from './languages/mod.ts';
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
        {
          name: 'Windows 10',
          version: 'DG',
          languages: { values: [{ name: 'English', code: 'en' }] },
        },
        {
          name: 'Windows 7',
          version: 'Pro 32',
          languages: { values: [{ name: 'English', code: 'en' }] },
        },
      ],
    },
    // Windows 10 DG Windows 7 Pro 32, Japanese
    {
      input: 'Windows 10 DG Windows 7 Pro 32, Japanese',
      expected: [
        {
          name: 'Windows 10',
          version: 'DG',
          languages: { values: [{ name: 'Japanese', code: 'ja' }] },
        },
        {
          name: 'Windows 7',
          version: 'Pro 32',
          languages: { values: [{ name: 'Japanese', code: 'ja' }] },
        },
      ],
    },
    // Windows 10 DG Windows 7 Pro 64
    {
      input: 'Windows 10 DG Windows 7 Pro 64',
      expected: [
        { name: 'Windows 10', version: 'DG', languages: {} as Languages },
        { name: 'Windows 7', version: 'Pro 64', languages: {} as Languages },
      ],
    },
    // Windows 10 DG Windows 7 Pro 64, Arabic / English
    {
      input: 'Windows 10 DG Windows 7 Pro 64, Arabic / English',
      expected: [
        {
          name: 'Windows 10',
          version: 'DG',
          languages: {
            values: [
              { name: 'Arabic', code: 'ar' },
              { name: 'English', code: 'en' },
            ],
          },
        },
        {
          name: 'Windows 7',
          version: 'Pro 64',
          languages: {
            values: [
              { name: 'Arabic', code: 'ar' },
              { name: 'English', code: 'en' },
            ],
          },
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
          languages: {
            values: [
              { name: 'Croatian', code: 'hr' },
              { name: 'English', code: 'en' },
              { name: 'Slovenian', code: 'sl' },
            ],
          },
        },
        {
          name: 'Windows 7',
          version: 'Pro 64',
          languages: {
            values: [
              { name: 'Croatian', code: 'hr' },
              { name: 'English', code: 'en' },
              { name: 'Slovenian', code: 'sl' },
            ],
          },
        },
      ],
    },
    // Windows 10 DG Windows 7 Pro 64, Czech / English
    {
      input: 'Windows 10 DG Windows 7 Pro 64, Czech / English',
      expected: [
        {
          name: 'Windows 10',
          version: 'DG',
          languages: {
            values: [
              { name: 'Czech', code: 'cs' },
              { name: 'English', code: 'en' },
            ],
          },
        },
        {
          name: 'Windows 7',
          version: 'Pro 64',
          languages: {
            values: [
              { name: 'Czech', code: 'cs' },
              { name: 'English', code: 'en' },
            ],
          },
        },
      ],
    },
    // Windows 10 DG Windows 7 Pro 64, English
    {
      input: 'Windows 10 DG Windows 7 Pro 64, English',
      expected: [
        {
          name: 'Windows 10',
          version: 'DG',
          languages: {
            values: [
              { name: 'English', code: 'en' },
            ],
          },
        },
        {
          name: 'Windows 7',
          version: 'Pro 64',
          languages: {
            values: [
              { name: 'English', code: 'en' },
            ],
          },
        },
      ],
    },
    // Windows 10 DG Windows 7 Pro 64, French
    {
      input: 'Windows 10 DG Windows 7 Pro 64, French',
      expected: [
        {
          name: 'Windows 10',
          version: 'DG',
          languages: { values: [{ name: 'French', code: 'fr' }] },
        },
        {
          name: 'Windows 7',
          version: 'Pro 64',
          languages: { values: [{ name: 'French', code: 'fr' }] },
        },
      ],
    },
    // Windows 10 DG Windows 7 Pro 64, German
    {
      input: 'Windows 10 DG Windows 7 Pro 64, German',
      expected: [
        {
          name: 'Windows 10',
          version: 'DG',
          languages: { values: [{ name: 'German', code: 'de' }] },
        },
        {
          name: 'Windows 7',
          version: 'Pro 64',
          languages: { values: [{ name: 'German', code: 'de' }] },
        },
      ],
    },
    // Windows 10 DG Windows 7 Pro 64, Greek / English
    {
      input: 'Windows 10 DG Windows 7 Pro 64, Greek / English',
      expected: [
        {
          name: 'Windows 10',
          version: 'DG',
          languages: {
            values: [
              { name: 'Greek', code: 'el' },
              { name: 'English', code: 'en' },
            ],
          },
        },
        {
          name: 'Windows 7',
          version: 'Pro 64',
          languages: {
            values: [
              { name: 'Greek', code: 'el' },
              { name: 'English', code: 'en' },
            ],
          },
        },
      ],
    },
    // Windows 10 DG Windows 7 Pro 64, Hebrew / English
    {
      input: 'Windows 10 DG Windows 7 Pro 64, Hebrew / English',
      expected: [
        {
          name: 'Windows 10',
          version: 'DG',
          languages: {
            values: [
              { name: 'Hebrew', code: 'he' },
              { name: 'English', code: 'en' },
            ],
          },
        },
        {
          name: 'Windows 7',
          version: 'Pro 64',
          languages: {
            values: [
              { name: 'Hebrew', code: 'he' },
              { name: 'English', code: 'en' },
            ],
          },
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
          languages: {
            values: [
              { name: 'Hungarian', code: 'hu' },
              { name: 'English', code: 'en' },
            ],
          },
        },
        {
          name: 'Windows 7',
          version: 'Pro 64',
          languages: {
            values: [
              { name: 'Hungarian', code: 'hu' },
              { name: 'English', code: 'en' },
            ],
          },
        },
      ],
    },
    // Windows 10 DG Windows 7 Pro 64, Japanese
    {
      input: 'Windows 10 DG Windows 7 Pro 64, Japanese',
      expected: [
        {
          name: 'Windows 10',
          version: 'DG',
          languages: {
            values: [
              { name: 'Japanese', code: 'ja' },
            ],
          },
        },
        {
          name: 'Windows 7',
          version: 'Pro 64',
          languages: {
            values: [
              { name: 'Japanese', code: 'ja' },
            ],
          },
        },
      ],
    },
    // Windows 10 DG Windows 7 Pro 64, Nordic (DK/FI/SV/NO/EN)
    {
      input: 'Windows 10 DG Windows 7 Pro 64, Nordic (DK/FI/SV/NO/EN)',
      expected: [
        {
          name: 'Windows 10',
          version: 'DG',
          languages: {
            family: 'Nordic',
            values: [
              { name: 'Danish', code: 'dk' },
              { name: 'Finnish', code: 'fi' },
              { name: 'Swedish', code: 'sv' },
              { name: 'Norwegian', code: 'no' },
              { name: 'English', code: 'en' },
            ],
          },
        },
        {
          name: 'Windows 7',
          version: 'Pro 64',
          languages: {
            family: 'Nordic',
            values: [
              { name: 'Danish', code: 'dk' },
              { name: 'Finnish', code: 'fi' },
              { name: 'Swedish', code: 'sv' },
              { name: 'Norwegian', code: 'no' },
              { name: 'English', code: 'en' },
            ],
          },
        },
      ],
    },
    // Windows 10 DG Windows 7 Pro 64, Polish / English
    {
      input: 'Windows 10 DG Windows 7 Pro 64, Polish / English',
      expected: [
        {
          name: 'Windows 10',
          version: 'DG',
          languages: {
            values: [
              { name: 'Polish', code: 'pl' },
              { name: 'English', code: 'en' },
            ],
          },
        },
        {
          name: 'Windows 7',
          version: 'Pro 64',
          languages: {
            values: [
              { name: 'Polish', code: 'pl' },
              { name: 'English', code: 'en' },
            ],
          },
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
          languages: {
            values: [
              { name: 'Portuguese', code: 'pt', region: 'Brazil' },
            ],
          },
        },
        {
          name: 'Windows 7',
          version: 'Pro 64',
          languages: {
            values: [
              { name: 'Portuguese', code: 'pt', region: 'Brazil' },
            ],
          },
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
          languages: {
            values: [
              { name: 'Portuguese', code: 'pt' },
              { name: 'English', code: 'en' },
            ],
          },
        },
        {
          name: 'Windows 7',
          version: 'Pro 64',
          languages: {
            values: [
              { name: 'Portuguese', code: 'pt' },
              { name: 'English', code: 'en' },
            ],
          },
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
          languages: {
            values: [
              { name: 'Romanian', code: 'ro' },
              { name: 'English', code: 'en' },
            ],
          },
        },
        {
          name: 'Windows 7',
          version: 'Pro 64',
          languages: {
            values: [
              { name: 'Romanian', code: 'ro' },
              { name: 'English', code: 'en' },
            ],
          },
        },
      ],
    },
    // Windows 10 DG Windows 7 Pro 64, Russian
    {
      input: 'Windows 10 DG Windows 7 Pro 64, Russian',
      expected: [
        {
          name: 'Windows 10',
          version: 'DG',
          languages: { values: [{ name: 'Russian', code: 'ru' }] },
        },
        {
          name: 'Windows 7',
          version: 'Pro 64',
          languages: { values: [{ name: 'Russian', code: 'ru' }] },
        },
      ],
    },
    // Windows 10 DG Windows 7 Pro 64, Serbian / English
    {
      input: 'Windows 10 DG Windows 7 Pro 64, Serbian / English',
      expected: [
        {
          name: 'Windows 10',
          version: 'DG',
          languages: {
            values: [
              { name: 'Serbian', code: 'sr' },
              { name: 'English', code: 'en' },
            ],
          },
        },
        {
          name: 'Windows 7',
          version: 'Pro 64',
          languages: {
            values: [
              { name: 'Serbian', code: 'sr' },
              { name: 'English', code: 'en' },
            ],
          },
        },
      ],
    },
    // Windows 10 DG Windows 7 Pro 64, Slovak / English
    {
      input: 'Windows 10 DG Windows 7 Pro 64, Slovak / English',
      expected: [
        {
          name: 'Windows 10',
          version: 'DG',
          languages: {
            values: [
              { name: 'Slovak', code: 'sk' },
              { name: 'English', code: 'en' },
            ],
          },
        },
        {
          name: 'Windows 7',
          version: 'Pro 64',
          languages: {
            values: [
              { name: 'Slovak', code: 'sk' },
              { name: 'English', code: 'en' },
            ],
          },
        },
      ],
    },
    // Windows 10 DG Windows 7 Pro 64, Spanish
    {
      input: 'Windows 10 DG Windows 7 Pro 64, Spanish',
      expected: [
        {
          name: 'Windows 10',
          version: 'DG',
          languages: { values: [{ name: 'Spanish', code: 'es' }] },
        },
        {
          name: 'Windows 7',
          version: 'Pro 64',
          languages: { values: [{ name: 'Spanish', code: 'es' }] },
        },
      ],
    },
    // Windows 10 DG Windows 7 Pro 64, Turkish / English
    {
      input: 'Windows 10 DG Windows 7 Pro 64, Turkish / English',
      expected: [
        {
          name: 'Windows 10',
          version: 'DG',
          languages: {
            values: [
              { name: 'Turkish', code: 'tr' },
              { name: 'English', code: 'en' },
            ],
          },
        },
        {
          name: 'Windows 7',
          version: 'Pro 64',
          languages: {
            values: [
              { name: 'Turkish', code: 'tr' },
              { name: 'English', code: 'en' },
            ],
          },
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
          languages: {
            family: 'Western European',
            values: [
              { name: 'English', code: 'en' },
              { name: 'French', code: 'fr' },
              { name: 'German', code: 'de' },
              { name: 'Dutch', code: 'nl' },
              { name: 'Italian', code: 'it' },
            ],
          },
        },
        {
          name: 'Windows 7',
          version: 'Pro 64',
          languages: {
            family: 'Western European',
            values: [
              { name: 'English', code: 'en' },
              { name: 'French', code: 'fr' },
              { name: 'German', code: 'de' },
              { name: 'Dutch', code: 'nl' },
              { name: 'Italian', code: 'it' },
            ],
          },
        },
      ],
    },
    // Windows 10 Home 64
    {
      input: 'Windows 10 Home 64',
      expected: [{
        name: 'Windows 10',
        version: 'Home 64',
        languages: {} as Languages,
      }],
    },
    // Windows 10 Home 64, Arabic / English
    {
      input: 'Windows 10 Home 64, Arabic / English',
      expected: [
        {
          name: 'Windows 10',
          version: 'Home 64',
          languages: {
            values: [
              { name: 'Arabic', code: 'ar' },
              { name: 'English', code: 'en' },
            ],
          },
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
          languages: {
            values: [
              { name: 'Croatian', code: 'hr' },
              { name: 'English', code: 'en' },
              { name: 'Slovenian', code: 'sl' },
            ],
          },
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
          languages: {
            values: [
              { name: 'Czech', code: 'cs' },
              { name: 'English', code: 'en' },
            ],
          },
        },
      ],
    },
    // Windows 10 Home 64, English
    {
      input: 'Windows 10 Home 64, English',
      expected: [
        {
          name: 'Windows 10',
          version: 'Home 64',
          languages: { values: [{ name: 'English', code: 'en' }] },
        },
      ],
    },
    // Windows 10 Home 64, French
    {
      input: 'Windows 10 Home 64, French',
      expected: [
        {
          name: 'Windows 10',
          version: 'Home 64',
          languages: { values: [{ name: 'French', code: 'fr' }] },
        },
      ],
    },
    // Windows 10 Home 64, German
    {
      input: 'Windows 10 Home 64, German',
      expected: [
        {
          name: 'Windows 10',
          version: 'Home 64',
          languages: { values: [{ name: 'German', code: 'de' }] },
        },
      ],
    },
    // Windows 10 Home 64, Greek / English
    {
      input: 'Windows 10 Home 64, Greek / English',
      expected: [
        {
          name: 'Windows 10',
          version: 'Home 64',
          languages: {
            values: [
              { name: 'Greek', code: 'el' },
              { name: 'English', code: 'en' },
            ],
          },
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
          languages: {
            values: [
              { name: 'Hebrew', code: 'he' },
              { name: 'English', code: 'en' },
            ],
          },
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
          languages: {
            values: [
              { name: 'Hungarian', code: 'hu' },
              { name: 'English', code: 'en' },
            ],
          },
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
          languages: {
            values: [
              { name: 'Korean', code: 'ko' },
              { name: 'English', code: 'en' },
            ],
          },
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
          languages: {
            family: 'Nordic',
            values: [
              { name: 'Danish', code: 'dk' },
              { name: 'Finnish', code: 'fi' },
              { name: 'Swedish', code: 'sv' },
              { name: 'Norwegian', code: 'no' },
              { name: 'English', code: 'en' },
            ],
          },
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
          languages: {
            values: [
              { name: 'Polish', code: 'pl' },
              { name: 'English', code: 'en' },
            ],
          },
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
          languages: {
            values: [
              { name: 'Portuguese', code: 'pt' },
              { name: 'English', code: 'en' },
            ],
          },
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
          languages: {
            values: [
              { name: 'Romanian', code: 'ro' },
              { name: 'English', code: 'en' },
            ],
          },
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
          languages: {
            values: [
              { name: 'Slovak', code: 'sk' },
              { name: 'English', code: 'en' },
            ],
          },
        },
      ],
    },
    // Windows 10 Home 64, Spanish
    {
      input: 'Windows 10 Home 64, Spanish',
      expected: [
        {
          name: 'Windows 10',
          version: 'Home 64',
          languages: { values: [{ name: 'Spanish', code: 'es' }] },
        },
      ],
    },
    // Windows 10 Home 64, Traditional Chinese / Simplified Chinese / English
    {
      input: 'Windows 10 Home 64, Traditional Chinese / Simplified Chinese / English',
      expected: [
        {
          name: 'Windows 10',
          version: 'Home 64',
          languages: {
            values: [
              { name: 'Traditional Chinese', code: 'zh-tw' },
              { name: 'Simplified Chinese', code: 'zh-cn' },
              { name: 'English', code: 'en' },
            ],
          },
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
          languages: {
            family: 'Western European',
            values: [
              { name: 'English', code: 'en' },
              { name: 'French', code: 'fr' },
              { name: 'German', code: 'de' },
              { name: 'Dutch', code: 'nl' },
              { name: 'Italian', code: 'it' },
            ],
          },
        },
      ],
    },
    // Windows 10 Pro 64
    {
      input: 'Windows 10 Pro 64',
      expected: [
        { name: 'Windows 10', version: 'Pro 64', languages: {} as Languages },
      ],
    },
    // Windows 10 Pro 64, Arabic / English
    {
      input: 'Windows 10 Pro 64, Arabic / English',
      expected: [
        {
          name: 'Windows 10',
          version: 'Pro 64',
          languages: {
            values: [
              { name: 'Arabic', code: 'ar' },
              { name: 'English', code: 'en' },
            ],
          },
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
          languages: {
            values: [
              { name: 'Croatian', code: 'hr' },
              { name: 'English', code: 'en' },
              { name: 'Slovenian', code: 'sl' },
            ],
          },
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
          languages: {
            values: [
              { name: 'Czech', code: 'cs' },
              { name: 'English', code: 'en' },
            ],
          },
        },
      ],
    },
    // Windows 10 Pro 64, English
    {
      input: 'Windows 10 Pro 64, English',
      expected: [
        {
          name: 'Windows 10',
          version: 'Pro 64',
          languages: { values: [{ name: 'English', code: 'en' }] },
        },
      ],
    },
    // Windows 10 Pro 64, French
    {
      input: 'Windows 10 Pro 64, French',
      expected: [
        {
          name: 'Windows 10',
          version: 'Pro 64',
          languages: { values: [{ name: 'French', code: 'fr' }] },
        },
      ],
    },
    // Windows 10 Pro 64, German
    {
      input: 'Windows 10 Pro 64, German',
      expected: [
        {
          name: 'Windows 10',
          version: 'Pro 64',
          languages: { values: [{ name: 'German', code: 'de' }] },
        },
      ],
    },
    // Windows 10 Pro 64, Greek / English
    {
      input: 'Windows 10 Pro 64, Greek / English',
      expected: [
        {
          name: 'Windows 10',
          version: 'Pro 64',
          languages: {
            values: [
              { name: 'Greek', code: 'el' },
              { name: 'English', code: 'en' },
            ],
          },
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
          languages: {
            values: [
              { name: 'Hebrew', code: 'he' },
              { name: 'English', code: 'en' },
            ],
          },
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
          languages: {
            values: [
              { name: 'Hungarian', code: 'hu' },
              { name: 'English', code: 'en' },
            ],
          },
        },
      ],
    },
    // Windows 10 Pro 64, Japanese
    {
      input: 'Windows 10 Pro 64, Japanese',
      expected: [
        {
          name: 'Windows 10',
          version: 'Pro 64',
          languages: { values: [{ name: 'Japanese', code: 'ja' }] },
        },
      ],
    },
    // Windows 10 Pro 64, Korean / English
    {
      input: 'Windows 10 Pro 64, Korean / English',
      expected: [
        {
          name: 'Windows 10',
          version: 'Pro 64',
          languages: {
            values: [
              { name: 'Korean', code: 'ko' },
              { name: 'English', code: 'en' },
            ],
          },
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
          languages: {
            family: 'Nordic',
            values: [
              { name: 'Danish', code: 'dk' },
              { name: 'Finnish', code: 'fi' },
              { name: 'Swedish', code: 'sv' },
              { name: 'Norwegian', code: 'no' },
              { name: 'English', code: 'en' },
            ],
          },
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
          languages: {
            values: [
              { name: 'Polish', code: 'pl' },
              { name: 'English', code: 'en' },
            ],
          },
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
          languages: {
            values: [{ name: 'Portuguese', code: 'pt', region: 'Brazil' }],
          },
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
          languages: {
            values: [
              { name: 'Portuguese', code: 'pt' },
              { name: 'English', code: 'en' },
            ],
          },
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
          languages: {
            values: [
              { name: 'Romanian', code: 'ro' },
              { name: 'English', code: 'en' },
            ],
          },
        },
      ],
    },
    // Windows 10 Pro 64, Russian
    {
      input: 'Windows 10 Pro 64, Russian',
      expected: [
        {
          name: 'Windows 10',
          version: 'Pro 64',
          languages: { values: [{ name: 'Russian', code: 'ru' }] },
        },
      ],
    },
    // Windows 10 Pro 64, Serbian / English
    {
      input: 'Windows 10 Pro 64, Serbian / English',
      expected: [
        {
          name: 'Windows 10',
          version: 'Pro 64',
          languages: {
            values: [
              { name: 'Serbian', code: 'sr' },
              { name: 'English', code: 'en' },
            ],
          },
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
          languages: {
            values: [
              { name: 'Slovak', code: 'sk' },
              { name: 'English', code: 'en' },
            ],
          },
        },
      ],
    },
    // Windows 10 Pro 64, Spanish
    {
      input: 'Windows 10 Pro 64, Spanish',
      expected: [
        {
          name: 'Windows 10',
          version: 'Pro 64',
          languages: { values: [{ name: 'Spanish', code: 'es' }] },
        },
      ],
    },
    // Windows 10 Pro 64, Traditional Chinese / English
    {
      input: 'Windows 10 Pro 64, Traditional Chinese / English',
      expected: [
        {
          name: 'Windows 10',
          version: 'Pro 64',
          languages: {
            values: [
              { name: 'Traditional Chinese', code: 'zh-TW' },
              { name: 'English', code: 'en' },
            ],
          },
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
          languages: {
            values: [
              { name: 'Traditional Chinese', code: 'zh-TW' },
              { name: 'Simplified Chinese', code: 'zh-CN' },
              { name: 'English', code: 'en' },
            ],
          },
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
          languages: {
            values: [
              { name: 'Turkish', code: 'tr' },
              { name: 'English', code: 'en' },
            ],
          },
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
          languages: {
            family: 'Western European',
            values: [
              { name: 'English', code: 'en' },
              { name: 'French', code: 'fr' },
              { name: 'German', code: 'de' },
              { name: 'Dutch', code: 'nl' },
              { name: 'Italian', code: 'it' },
            ],
          },
        },
      ],
    },
    // Windows 8.1 DG Windows 7 Pro 64
    {
      input: 'Windows 8.1 DG Windows 7 Pro 64',
      expected: [
        { name: 'Windows 8.1', version: 'DG', languages: {} as Languages },
        { name: 'Windows 7', version: 'Pro 64', languages: {} as Languages },
      ],
    },
    // Windows 8.1 Pro 64-bit
    {
      input: 'Windows 8.1 Pro 64-bit',
      expected: [
        {
          name: 'Windows 8.1',
          version: 'Pro 64-bit',
          languages: {} as Languages,
        },
      ],
    },
    // Windows 10 DG Windows 7 Pro 64
    {
      input: 'Windows 10 DG Windows 7 Pro 64',
      expected: [
        { name: 'Windows 10', version: 'DG', languages: {} as Languages },
        { name: 'Windows 7', version: 'Pro 64', languages: {} as Languages },
      ],
    },
    // Windows 10 Pro 64
    {
      input: 'Windows 10 Pro 64',
      expected: [
        { name: 'Windows 10', version: 'Pro 64', languages: {} as Languages },
      ],
    },
    // Windows 8 DG Windows 7 Pro 64
    {
      input: 'Windows 8 DG Windows 7 Pro 64',
      expected: [
        { name: 'Windows 8', version: 'DG', languages: {} as Languages },
        { name: 'Windows 7', version: 'Pro 64', languages: {} as Languages },
      ],
    },
    // Windows 8 Pro 64-bit
    {
      input: 'Windows 8 Pro 64-bit',
      expected: [
        {
          name: 'Windows 8',
          version: 'Pro 64-bit',
          languages: {} as Languages,
        },
      ],
    },
    // Windows 8.1 DG Windows 7 Pro 64
    {
      input: 'Windows 8.1 DG Windows 7 Pro 64',
      expected: [
        { name: 'Windows 8.1', version: 'DG', languages: {} as Languages },
        { name: 'Windows 7', version: 'Pro 64', languages: {} as Languages },
      ],
    },
    // Windows 8.1 Pro 64-bit
    {
      input: 'Windows 8.1 Pro 64-bit',
      expected: [
        {
          name: 'Windows 8.1',
          version: 'Pro 64-bit',
          languages: {} as Languages,
        },
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
