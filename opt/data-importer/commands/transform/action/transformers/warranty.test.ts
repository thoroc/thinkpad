import { assertEquals } from 'jsr:@std/assert';
import { describe, it } from 'jsr:@std/testing/bdd';
import { toWarranty, Warranty } from './warranty.ts';

describe('toWarranty', () => {
  const testCases: Array<{ input: string; expected: Warranty }> = [
    // 1-year depot
    {
      input: '1-year depot',
      expected: { basePeriod: '1-year', location: 'depot' },
    },
    // 1-year Depot with 2-year System Board
    {
      input: '1-year Depot with 2-year System Board',
      expected: {
        basePeriod: '1-year',
        location: 'Depot',
        extended: { period: '2-year', description: 'System Board' },
      },
    },
    {
      input: '1-year Depot with 2-year System Board',
      expected: {
        basePeriod: '1-year',
        location: 'Depot',
        extended: { period: '2-year', description: 'System Board' },
      },
    },
    // 1-year, Depot
    {
      input: '1-year, Depot',
      expected: { basePeriod: '1-year', location: 'Depot' },
    },
    // 1-year, Depot with 2-year System Board
    {
      input: '1-year, Depot with 2-year System Board',
      expected: {
        basePeriod: '1-year',
        location: 'Depot',
        extended: { period: '2-year', description: 'System Board' },
      },
    },
    // 1-year, Onsite
    {
      input: '1-year, Onsite',
      expected: { basePeriod: '1-year', location: 'Onsite' },
    },
    // 3-year depot
    {
      input: '3-year depot',
      expected: { basePeriod: '3-year', location: 'depot' },
    },
    // 3-year onsite
    {
      input: '3-year onsite',
      expected: { basePeriod: '3-year', location: 'onsite' },
    },
    // 3-year onsite Onsite International Delivery
    {
      input: '3-year onsite Onsite International Delivery',
      expected: {
        basePeriod: '3-year',
        location: 'onsite',
        internationalDelivery: true,
      },
    },
    // 3-year, Depot
    {
      input: '3-year, Depot',
      expected: { basePeriod: '3-year', location: 'Depot' },
    },
    // 3-year, Onsite
    {
      input: '3-year, Onsite',
      expected: { basePeriod: '3-year', location: 'Onsite' },
    },
    // 3-year, Onsite with 3-year Battery
    {
      input: '3-year, Onsite with 3-year Battery',
      expected: {
        basePeriod: '3-year',
        location: 'Onsite',
        extended: { period: '3-year', description: 'Battery' },
      },
    },
  ];

  for (const { input, expected } of testCases) {
    it(`should handle ${input}`, () => {
      // Act
      const result = toWarranty(input);

      // Assert
      assertEquals(result, expected as Warranty);
    });
  }
});
