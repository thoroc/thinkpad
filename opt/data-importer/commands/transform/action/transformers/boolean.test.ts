import { assertEquals } from 'jsr:@std/assert';
import { describe, it } from 'jsr:@std/testing/bdd';
import { toBoolean } from './boolean.ts';

describe('toBoolean', () => {
  const PositiveTestCases = [
    { Input: 'YES', Expected: true },
    { Input: 'Yes', Expected: true },
    { Input: 'yes', Expected: true },
  ];
  for (const { Input, Expected } of PositiveTestCases) {
    it(`should transform positive boolean value for ${Input}`, () => {
      // Act
      const actual = toBoolean(Input);

      // Assert
      assertEquals(actual, Expected);
    });
  }

  const NegativeTestCases = [
    { Input: 'NO', Expected: false },
    { Input: 'No', Expected: false },
    { Input: 'no', Expected: false },
    { Input: 'None', Expected: false },
    { Input: 'NONE', Expected: false },
  ];

  for (const { Input, Expected } of NegativeTestCases) {
    it(`should transform negative boolean value for ${Input}`, () => {
      // Act
      const actual = toBoolean(Input);

      // Assert
      assertEquals(actual, Expected);
    });
  }
});
