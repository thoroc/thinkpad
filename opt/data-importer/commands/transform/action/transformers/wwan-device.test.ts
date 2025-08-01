import { assertEquals } from 'jsr:@std/assert';
import { describe, it } from 'jsr:@std/testing/bdd';
import testCases from './wwan-device.fixtures.json' with { type: 'json' };
import { toWWANDevice, WWANDevice } from './wwan-device.ts';

describe('toWWANDevice', () => {
  for (
    const { input, expected } of (testCases as Array<{ input: string; expected: WWANDevice }>)
  ) {
    it(`should parse "${input}" correctly`, () => {
      // Act
      const result = toWWANDevice(input);

      // Assert
      assertEquals(result, expected);
    });
  }
});
