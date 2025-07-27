import { assertEquals } from 'jsr:@std/assert';
import { describe, it } from 'jsr:@std/testing/bdd';
import { toWLANDevice, WLANDevice } from './wlan-device.ts';

describe('toWLANDevice', () => {
  const testCases: Array<{ input: string; expected: WLANDevice }> = [
    // Intel 7260 a/b/g/n + BT4.0
    {
      input: 'Intel 7260 a/b/g/n + BT4.0',
      expected: {
        vendor: 'Intel',
        chipset: '7260',
        standard: ['a', 'b', 'g', 'n'],
      },
    },
    // Intel 7260 ac + BT4.0
    {
      input: 'Intel 7260 ac + BT4.0',
      expected: {
        vendor: 'Intel',
        chipset: '7260',
        standard: ['ac'],
      },
    },
    // Intel 7260 b/g/n + BT4.0
    {
      input: 'Intel 7260 b/g/n + BT4.0',
      expected: {
        vendor: 'Intel',
        chipset: '7260',
        standard: ['b', 'g', 'n'],
      },
    },
    // Intel 7265 a/b/g/n + BT4.0
    {
      input: 'Intel 7265 a/b/g/n + BT4.0',
      expected: {
        vendor: 'Intel',
        chipset: '7265',
        standard: ['a', 'b', 'g', 'n'],
      },
    },
    // Intel 7265 ac + BT4.0
    {
      input: 'Intel 7265 ac + BT4.0',
      expected: {
        vendor: 'Intel',
        chipset: '7265',
        standard: ['ac'],
      },
    },
    // 11b/g/n, 2x2 + BT4.0
    {
      input: '11b/g/n, 2x2 + BT4.0',
      expected: {
        standard: ['11b', 'g', 'n'],
        antenna: '2x2',
      },
    },
    // Intel 18260 ac, 2x2 + BT4.1
    {
      input: 'Intel 18260 ac, 2x2 + BT4.1',
      expected: {
        vendor: 'Intel',
        chipset: '18260',
        standard: ['ac'],
        antenna: '2x2',
      },
    },
    // Intel 18265 11ac, 2x2 + BT4.1
    {
      input: 'Intel 18265 11ac, 2x2 + BT4.1',
      expected: {
        vendor: 'Intel',
        chipset: '18265',
        standard: ['11ac'],
        antenna: '2x2',
      },
    },
    // Intel 7265 a/b/g/n, 2x2 + BT4.0
    {
      input: 'Intel 7265 a/b/g/n, 2x2 + BT4.0',
      expected: {
        vendor: 'Intel',
        chipset: '7265',
        standard: ['a', 'b', 'g', 'n'],
        antenna: '2x2',
      },
    },
    // Intel 7265 ac, 2x2 + BT4.0
    {
      input: 'Intel 7265 ac, 2x2 + BT4.0',
      expected: {
        vendor: 'Intel',
        chipset: '7265',
        standard: ['ac'],
        antenna: '2x2',
      },
    },
    // Intel 7265 b/g/n, 2x2 + BT4.0
    {
      input: 'Intel 7265 b/g/n, 2x2 + BT4.0',
      expected: {
        vendor: 'Intel',
        chipset: '7265',
        standard: ['b', 'g', 'n'],
        antenna: '2x2',
      },
    },
    // Intel 8260 11ac, 2x2 + BT4.1
    {
      input: 'Intel 8260 11ac, 2x2 + BT4.1',
      expected: {
        vendor: 'Intel',
        chipset: '8260',
        standard: ['11ac'],
        antenna: '2x2',
      },
    },
    // Intel 8260 ac, 2x2 + BT4.1
    {
      input: 'Intel 8260 ac, 2x2 + BT4.1',
      expected: {
        vendor: 'Intel',
        chipset: '8260',
        standard: ['ac'],
        antenna: '2x2',
      },
    },
    // Intel 8265 11ac, 2x2 + BT4.1
    {
      input: 'Intel 8265 11ac, 2x2 + BT4.1', // Note the alpha-numeric standard
      expected: {
        vendor: 'Intel',
        chipset: '8265',
        standard: ['11ac'],
        antenna: '2x2',
      },
    },
    // Intel 8265 ac, 2x2 + BT4.1
    {
      input: 'Intel 8265 ac, 2x2 + BT4.1', // Note the alpha-numeric standard
      expected: {
        vendor: 'Intel',
        chipset: '8265',
        standard: ['ac'],
        antenna: '2x2',
      },
    },
    // None
    {
      input: 'None',
      expected: {},
    },
    // RTL8822BE 11ac, 2x2 + BT4.1
    {
      input: 'RTL8822BE 11ac, 2x2 + BT4.1',
      expected: {
        vendor: 'RTL8822BE',
        standard: ['11ac'],
        antenna: '2x2',
      },
    },
  ];

  for (const { input, expected } of testCases) {
    it(`should parse "${input}" correctly`, () => {
      // Act
      const result = toWLANDevice(input);

      // Assert
      assertEquals(result, expected);
    });
  }
});
