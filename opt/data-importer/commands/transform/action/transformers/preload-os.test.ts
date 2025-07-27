import { assertEquals } from 'jsr:@std/assert';
import { describe, it } from 'jsr:@std/testing/bdd';
import { PreloadedOS, toPreloadedOS } from './preload-os.ts';

describe('toPreloadedOS', () => {
  const testCases: Record<string, { input: string; expected: PreloadedOS[] }> = {
    'case 1': {
      input: 'Windows 10 DG Windows 7 Pro 64',
      expected: [
        { name: 'Windows 10', version: 'DG' },
        { name: 'Windows 7', version: 'Pro 64' },
      ],
    },
    'case 2': {
      input: 'Windows 10 Pro 64',
      expected: [{ name: 'Windows 10', version: 'Pro 64' }],
    },
    'case 3': {
      input: 'Windows 8 DG Windows 7 Pro 64',
      expected: [
        { name: 'Windows 8', version: 'DG' },
        { name: 'Windows 7', version: 'Pro 64' },
      ],
    },
    'case 4': {
      input: 'Windows 8 Pro 64-bit',
      expected: [{ name: 'Windows 8', version: 'Pro 64-bit' }],
    },
    'case 5': {
      input: 'Windows 8.1 DG Windows 7 Pro 64',
      expected: [
        { name: 'Windows 8.1', version: 'DG' },
        { name: 'Windows 7', version: 'Pro 64' },
      ],
    },
    'case 6': {
      input: 'Windows 8.1 Pro 64-bit',
      expected: [{
        name: 'Windows 8.1',
        version: 'Pro 64-bit',
      }],
    },
  };

  for (const [name, { input, expected }] of Object.entries(testCases)) {
    it(`should parse "${name}" correctly`, () => {
      // Act
      const result = toPreloadedOS(input);

      // Assert
      assertEquals(result, expected as PreloadedOS[]);
    });
  }
});
