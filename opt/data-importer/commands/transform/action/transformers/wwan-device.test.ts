import { assertEquals } from 'jsr:@std/assert';
import { describe, it } from 'jsr:@std/testing/bdd';
import { toWWANDevice, WWANDevice } from './wwan-device.ts';

describe('toWWANDevice', () => {
  const testCases: Array<{ input: string; expected: WWANDevice }> = [
    // Ericsson N5321
    {
      input: 'Ericsson N5321',
      expected: { vendor: 'Ericsson', model: 'N5321', upgradable: true },
    },
    // Fibocom L830-EB
    {
      input: 'Fibocom L830-EB',
      expected: { vendor: 'Fibocom', model: 'L830-EB', upgradable: true },
    },
    // Fibocom L831-EAU
    {
      input: 'Fibocom L831-EAU',
      expected: { vendor: 'Fibocom', model: 'L831-EAU', upgradable: true },
    },
    // Fibocom L850-GL
    {
      input: 'Fibocom L850-GL',
      expected: { vendor: 'Fibocom', model: 'L850-GL', upgradable: true },
    },
    // HUAWEI ME906S
    {
      input: 'HUAWEI ME906S',
      expected: { vendor: 'HUAWEI', model: 'ME906S', upgradable: true },
    },
    // None
    {
      input: 'None',
      expected: { upgradable: false },
    },
    // Sierra EM7345
    {
      input: 'Sierra EM7345',
      expected: { vendor: 'Sierra', model: 'EM7345', upgradable: true },
    },
    // Sierra EM7355
    {
      input: 'Sierra EM7355',
      expected: { vendor: 'Sierra', model: 'EM7355', upgradable: true },
    },
    // Sierra EM7430
    {
      input: 'Sierra EM7430',
      expected: { vendor: 'Sierra', model: 'EM7430', upgradable: true },
    },
    // Sierra EM7455
    {
      input: 'Sierra EM7455',
      expected: { vendor: 'Sierra', model: 'EM7455', upgradable: true },
    },
    // WWAN Upgradable
    {
      input: 'WWAN Upgradable',
      expected: { upgradable: true },
    },
    // WWAN upgradable
    {
      input: 'WWAN upgradable',
      expected: { upgradable: true },
    },
    // 16GB SSD
  ];

  for (const { input, expected } of testCases) {
    it(`should parse "${input}" correctly`, () => {
      // Act
      const result = toWWANDevice(input);

      // Assert
      assertEquals(result, expected);
    });
  }
});
