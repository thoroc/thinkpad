import { assertEquals } from 'jsr:@std/assert';
import { describe, it } from 'jsr:@std/testing/bdd';
import { SystemMemory, toSystemMemory } from './mod.ts';
// import { MemoryModule, toMemoryModule } from "./module.ts";

describe('toSystemMemory', () => {
  const testCases: Array<{
    input: string;
    expected: SystemMemory;
  }> = [
    // 16GB Soldered DDR4-2400,
    {
      input: '16GB Soldered DDR4-2400',
      expected: { dimms: [{ size: 16, unit: 'GB', type: 'DDR4-2400' }] },
    },
    // 16GBx1,
    {
      input: '16GBx1',
      expected: {
        dimms: [{ size: 16, unit: 'GB' }],
      },
    },
    // 16GBx2,
    {
      input: '16GBx2',
      expected: {
        dimms: [{ size: 16, unit: 'GB' }, { size: 16, unit: 'GB' }],
      },
    },
    // 1x 16GB SO-DIMM DDR4-2133,
    {
      input: '1x 16GB SO-DIMM DDR4-2133',
      expected: {
        dimms: [{ size: 16, unit: 'GB', type: 'DDR4-2133' }],
      },
    },
    // 1x 16GB SO-DIMM DDR4-2400,
    {
      input: '1x 16GB SO-DIMM DDR4-2400',
      expected: {
        dimms: [{ size: 16, unit: 'GB', type: 'DDR4-2400' }],
      },
    },
    // 1x 4GB SO-DIMM DDR4-2133,
    {
      input: '1x 4GB SO-DIMM DDR4-2133',
      expected: {
        dimms: [{ size: 4, unit: 'GB', type: 'DDR4-2133' }],
      },
    },
    // 1x 4GB SO-DIMM DDR4-2400,
    {
      input: '1x 4GB SO-DIMM DDR4-2400',
      expected: {
        dimms: [{ size: 4, unit: 'GB', type: 'DDR4-2400' }],
      },
    },
    // 1x 8GB SO-DIMM DDR4-2133,
    {
      input: '1x 8GB SO-DIMM DDR4-2133',
      expected: {
        dimms: [{ size: 8, unit: 'GB', type: 'DDR4-2133' }],
      },
    },
    // 1x 8GB SO-DIMM DDR4-2400,
    {
      input: '1x 8GB SO-DIMM DDR4-2400',
      expected: {
        dimms: [{ size: 8, unit: 'GB', type: 'DDR4-2400' }],
      },
    },
    // 2GBx2,
    {
      input: '2GBx2',
      expected: {
        dimms: [{ size: 2, unit: 'GB' }, { size: 2, unit: 'GB' }],
      },
    },
    // 2x 16GB SO-DIMM DDR4-2133,
    {
      input: '2x 16GB SO-DIMM DDR4-2133',
      expected: {
        dimms: [{ size: 16, unit: 'GB', type: 'DDR4-2133' }, {
          size: 16,
          unit: 'GB',
          type: 'DDR4-2133',
        }],
      },
    },
    // 2x 16GB SO-DIMM DDR4-2400,
    {
      input: '2x 16GB SO-DIMM DDR4-2400',
      expected: {
        dimms: [{ size: 16, unit: 'GB', type: 'DDR4-2400' }, {
          size: 16,
          unit: 'GB',
          type: 'DDR4-2400',
        }],
      },
    },
    // 2x 4GB SO-DIMM DDR4-2133,
    {
      input: '2x 4GB SO-DIMM DDR4-2133',
      expected: {
        dimms: [{ size: 4, unit: 'GB', type: 'DDR4-2133' }, {
          size: 4,
          unit: 'GB',
          type: 'DDR4-2133',
        }],
      },
    },
    // 2x 4GB SO-DIMM DDR4-2400,
    {
      input: '2x 4GB SO-DIMM DDR4-2400',
      expected: {
        dimms: [{ size: 4, unit: 'GB', type: 'DDR4-2400' }, {
          size: 4,
          unit: 'GB',
          type: 'DDR4-2400',
        }],
      },
    },
    // 2x 8GB SO-DIMM DDR4-2133,
    {
      input: '2x 8GB SO-DIMM DDR4-2133',
      expected: {
        dimms: [{ size: 8, unit: 'GB', type: 'DDR4-2133' }, {
          size: 8,
          unit: 'GB',
          type: 'DDR4-2133',
        }],
      },
    },
    // 2x 8GB SO-DIMM DDR4-2400,
    {
      input: '2x 8GB SO-DIMM DDR4-2400',
      expected: {
        dimms: [{ size: 8, unit: 'GB', type: 'DDR4-2400' }, {
          size: 8,
          unit: 'GB',
          type: 'DDR4-2400',
        }],
      },
    },
    // 4GB Soldered,
    {
      input: '4GB Soldered',
      expected: {
        soldered: [{ size: 4, unit: 'GB' }],
      },
    },
    // 4GB Soldered + 16GB DIMM,
    {
      input: '4GB Soldered + 16GB DIMM',
      expected: {
        soldered: [{ size: 4, unit: 'GB' }],
        dimms: [{ size: 16, unit: 'GB' }],
      },
    },
    // 4GB Soldered + 4GB DIMM,
    {
      input: '4GB Soldered + 4GB DIMM',
      expected: {
        soldered: [{ size: 4, unit: 'GB' }],
        dimms: [{ size: 4, unit: 'GB' }],
      },
    },
    // 4GB Soldered + 8GB DIMM,
    {
      input: '4GB Soldered + 8GB DIMM',
      expected: {
        soldered: [{ size: 4, unit: 'GB' }],
        dimms: [{ size: 8, unit: 'GB' }],
      },
    },
    // 4GB Soldered DDR4-2133,
    {
      input: '4GB Soldered DDR4-2133',
      expected: {
        soldered: [{ size: 4, unit: 'GB', type: 'DDR4-2133' }],
      },
    },
    // 4GB Soldered DDR4-2133 + 16GB SO-DIMM DDR4-2133,
    {
      input: '4GB Soldered DDR4-2133 + 16GB SO-DIMM DDR4-2133',
      expected: {
        soldered: [{ size: 4, unit: 'GB', type: 'DDR4-2133' }],
        dimms: [{ size: 16, unit: 'GB', type: 'DDR4-2133' }],
      },
    },
    // 4GB Soldered DDR4-2133 + 4GB SO-DIMM DDR4-2133,
    {
      input: '4GB Soldered DDR4-2133 + 4GB SO-DIMM DDR4-2133',
      expected: {
        soldered: [{ size: 4, unit: 'GB', type: 'DDR4-2133' }],
        dimms: [{ size: 4, unit: 'GB', type: 'DDR4-2133' }],
      },
    },
    // 4GB Soldered DDR4-2133 + 8GB SO-DIMM DDR4-2133,
    {
      input: '4GB Soldered DDR4-2133 + 8GB SO-DIMM DDR4-2133',
      expected: {
        soldered: [{ size: 4, unit: 'GB', type: 'DDR4-2133' }],
        dimms: [{ size: 8, unit: 'GB', type: 'DDR4-2133' }],
      },
    },
    // 4GB Soldered DDR4-2400,
    {
      input: '4GB Soldered DDR4-2400',
      expected: {
        soldered: [{ size: 4, unit: 'GB', type: 'DDR4-2400' }],
      },
    },
    // 4GB Soldered DDR4-2400 + 4GB SO-DIMM DDR4-2400,
    {
      input: '4GB Soldered DDR4-2400 + 4GB SO-DIMM DDR4-2400',
      expected: {
        soldered: [{ size: 4, unit: 'GB', type: 'DDR4-2400' }],
        dimms: [{ size: 4, unit: 'GB', type: 'DDR4-2400' }],
      },
    },
    // 4GBx1,
    {
      input: '4GBx1',
      expected: {
        dimms: [{ size: 4, unit: 'GB' }],
      },
    },
    // 4GBx2,
    {
      input: '4GBx2',
      expected: {
        dimms: [{ size: 4, unit: 'GB' }, { size: 4, unit: 'GB' }],
      },
    },
    // 8GB,
    {
      input: '8GB',
      expected: {
        dimms: [{ size: 8, unit: 'GB' }],
      },
    },
    // 8GB Soldered,
    {
      input: '8GB Soldered',
      expected: {
        soldered: [{ size: 8, unit: 'GB' }],
      },
    },
    // 8GB Soldered DDR4-2133,
    {
      input: '8GB Soldered DDR4-2133',
      expected: {
        soldered: [{ size: 8, unit: 'GB', type: 'DDR4-2133' }],
      },
    },
    // 8GB Soldered DDR4-2133 + 16GB SO-DIMM DDR4-2133,
    {
      input: '8GB Soldered DDR4-2133 + 16GB SO-DIMM DDR4-2133',
      expected: {
        soldered: [{ size: 8, unit: 'GB', type: 'DDR4-2133' }],
        dimms: [{ size: 16, unit: 'GB', type: 'DDR4-2133' }],
      },
    },
    // 8GB Soldered DDR4-2133 + 4GB SO-DIMM DDR4-2133,
    {
      input: '8GB Soldered DDR4-2133 + 4GB SO-DIMM DDR4-2133',
      expected: {
        soldered: [{ size: 8, unit: 'GB', type: 'DDR4-2133' }],
        dimms: [{ size: 4, unit: 'GB', type: 'DDR4-2133' }],
      },
    },
    // 8GB Soldered DDR4-2133 + 8GB SO-DIMM DDR4-2133,
    {
      input: '8GB Soldered DDR4-2133 + 8GB SO-DIMM DDR4-2133',
      expected: {
        soldered: [{ size: 8, unit: 'GB', type: 'DDR4-2133' }],
        dimms: [{ size: 8, unit: 'GB', type: 'DDR4-2133' }],
      },
    },
    // 8GB Soldered DDR4-2400,
    {
      input: '8GB Soldered DDR4-2400',
      expected: {
        soldered: [{ size: 8, unit: 'GB', type: 'DDR4-2400' }],
      },
    },
    // 8GB Soldered DDR4-2400 + 16GB SO-DIMM DDR4-2400,
    {
      input: '8GB Soldered DDR4-2400 + 16GB SO-DIMM DDR4-2400',
      expected: {
        soldered: [{ size: 8, unit: 'GB', type: 'DDR4-2400' }],
        dimms: [{ size: 16, unit: 'GB', type: 'DDR4-2400' }],
      },
    },
    // 8GB Soldered DDR4-2400 + 4GB SO-DIMM DDR4-2400,
    {
      input: '8GB Soldered DDR4-2400 + 4GB SO-DIMM DDR4-2400',
      expected: {
        soldered: [{ size: 8, unit: 'GB', type: 'DDR4-2400' }],
        dimms: [{ size: 4, unit: 'GB', type: 'DDR4-2400' }],
      },
    },
    // 8GB Soldered DDR4-2400 + 8GB SO-DIMM DDR4-2400,
    {
      input: '8GB Soldered DDR4-2400 + 8GB SO-DIMM DDR4-2400',
      expected: {
        soldered: [{ size: 8, unit: 'GB', type: 'DDR4-2400' }],
        dimms: [{ size: 8, unit: 'GB', type: 'DDR4-2400' }],
      },
    },
    // 8GBx1,
    {
      input: '8GBx1',
      expected: {
        dimms: [{ size: 8, unit: 'GB' }],
      },
    },
    // 8GBx2
    {
      input: '8GBx2',
      expected: {
        dimms: [{ size: 8, unit: 'GB' }, { size: 8, unit: 'GB' }],
      },
    },
    // 0+4GB,
    {
      input: '0+4GB',
      expected: {
        soldered: [{ size: 0, unit: 'GB' }],
        dimms: [{ size: 4, unit: 'GB' }],
      },
    },
    // 0+8GB,
    {
      input: '0+8GB',
      expected: {
        soldered: [{ size: 0, unit: 'GB' }],
        dimms: [{ size: 8, unit: 'GB' }],
      },
    },
    // 4+0GB,
    {
      input: '4+0GB',
      expected: {
        soldered: [{ size: 4, unit: 'GB' }],
        dimms: [{ size: 0, unit: 'GB' }],
      },
    },
    // 4+2GB,
    {
      input: '4+2GB',
      expected: {
        soldered: [{ size: 4, unit: 'GB' }],
        dimms: [{ size: 2, unit: 'GB' }],
      },
    },
    // 4+4GB,
    {
      input: '4+4GB',
      expected: {
        soldered: [{ size: 4, unit: 'GB' }],
        dimms: [{ size: 4, unit: 'GB' }],
      },
    },
    // 4+8GB
    {
      input: '4+8GB',
      expected: {
        soldered: [{ size: 4, unit: 'GB' }],
        dimms: [{ size: 8, unit: 'GB' }],
      },
    },
  ];

  for (const { input, expected } of testCases) {
    it(`should parse "${input}" correctly`, () => {
      // Arrange & Act
      const result = toSystemMemory(input);

      // Assert
      assertEquals(result, expected);
    });
  }
});
