import { assertEquals } from 'jsr:@std/assert';
import { describe, it } from 'jsr:@std/testing/bdd';
import testCases from './wlan-device.fixtures.json' with { type: 'json' };
import { toWLANDevice, WLANDevice } from './wlan-device.ts';

describe('toWLANDevice', () => {
  for (
    const { input, expected } of (testCases as Array<{ input: string; expected: WLANDevice }>)
  ) {
    it(`should parse "${input}" correctly`, () => {
      // Act
      const result = toWLANDevice(input);

      // Assert
      assertEquals(result, expected);
    });
  }
});
