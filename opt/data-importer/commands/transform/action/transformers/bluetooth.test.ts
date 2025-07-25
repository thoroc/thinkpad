import { assertEquals } from 'jsr:@std/assert';
import { describe, it } from 'jsr:@std/testing/bdd';
import { Bluetooth, toBluetooth } from './bluetooth.ts';

describe('toBluetooth', () => {
  it('should return an empty object for undefined input', () => {
    // Arrange
    const input = '';

    // Act
    const result = toBluetooth(input);

    // Assert
    assertEquals(result, {} as Bluetooth);
  });

  const test_cases = [
    {
      input: 'Intel 8260 ac, 2x2 + BT4.1',
      expected: '4.1',
    },
    {
      input: 'Intel 8260 ac, 2x2 + BT5.0',
      expected: '5.0',
    },
    {
      input: 'Intel 8260 ac, 2x2 + BT5.1',
      expected: '5.1',
    },
  ];

  for (const { input, expected } of test_cases) {
    it(`should parse Bluetooth standard correctly for input "${input}"`, () => {
      // Act
      const result = toBluetooth(input);

      // Assert
      assertEquals(result.standard, expected);
    });
  }
});
