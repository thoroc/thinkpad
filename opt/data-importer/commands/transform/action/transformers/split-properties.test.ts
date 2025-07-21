import { assertEquals } from 'jsr:@std/assert';
import { describe, it } from 'jsr:@std/testing/bdd';
import { transformToSplitProperties } from './split-properties.ts';
import { Separators, Transformed } from './types.ts';

describe('transformToSplitProperties', () => {
  const testCases = [
    {
      Key: 'Foo',
      Value: 'Bar',
      Separators: [],
      expected: { 'Foo': 'Bar' } as Transformed,
    },
    {
      Key: 'Foo1 + Foo2',
      Value: 'Bar1 + Bar2',
      Separators: [Separators.PlusSign],
      expected: [
        { 'Foo1': 'Bar1' },
        { 'Foo2': 'Bar2' },
      ] as Transformed[],
    },
    {
      Key: 'Foo1 - Foo2',
      Value: 'Bar1 + Bar2',
      Separators: [Separators.MinusSign, Separators.PlusSign],
      expected: { 'Foo1 - Foo2': 'Bar1 + Bar2' } as Transformed,
    },
    {
      Key: 'Foo1 + Foo2',
      Value: 'Bar1 - Bar2',
      Separators: [Separators.PlusSign, Separators.MinusSign],
      expected: { 'Foo1 + Foo2': 'Bar1 - Bar2' } as Transformed,
    },
    {
      Key: 'Foo1 - Foo2',
      Value: 'Bar1 - Bar2',
      Separators: [Separators.MinusSign, Separators.PlusSign],
      expected: [
        { 'Foo1': 'Bar1' } as Transformed,
        { 'Foo2': 'Bar2' } as Transformed,
      ],
    },
  ];

  for (const { Key, Value, Separators, expected } of testCases) {
    it(`should split properties {"${Key}": "${Value}"} by [${Separators}]`, () => {
      // Arrange
      const options = { Key, Value, Separators };

      // Act
      const actual = transformToSplitProperties(options);

      // Assert
      assertEquals(actual, expected);
    });
  }
});
