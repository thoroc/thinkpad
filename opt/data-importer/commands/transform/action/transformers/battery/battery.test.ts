import { assertEquals } from 'jsr:@std/assert';
import { describe, it } from 'jsr:@std/testing/bdd';
import testCases from './battery.fixtures.json' with {
  type: 'json',
};
import { Battery, toBattery } from './battery.ts';

describe('toBatteries', () => {
  for (
    const { input, expected } of (testCases as Array<{ input: string; expected: Battery }>)
  ) {
    it(`should parse "${input}" correctly`, () => {
      // Act
      const result = toBattery(input);

      // Assert
      assertEquals(result, expected);
    });
  }
});
