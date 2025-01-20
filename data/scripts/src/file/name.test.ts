import { assertEquals } from "jsr:@std/assert";
import { describe, it } from "jsr:@std/testing/bdd";
import { pascalCase } from "./name.ts";

describe("pascalCase", () => {
  const testCases = [
    { "input": "foo-baa", "expected": "FooBaa" },
    { "input": "foo_baa", "expected": "FooBaa" },
    { "input": "foo-baa-1", "expected": "FooBaa1" },
    { "input": "foo_baa_1", "expected": "FooBaa1" },
    { "input": "foo-baa-1-2", "expected": "FooBaa12" },
    { "input": "foo_baa_1-2", "expected": "FooBaa12" },
    { "input": "foo-baa-123-a", "expected": "FooBaa123A" },
    { "input": "foo_baa_123_a", "expected": "FooBaa123A" },
    { "input": "foo-baa-123-abc", "expected": "FooBaa123Abc" },
    { "input": "foo_baa_123_abc", "expected": "FooBaa123Abc" },
  ];

  testCases.forEach(({ input, expected }) => {
    it(`should convert ${input} to ${expected}`, () => {
      // Act
      const actual = pascalCase(input);

      // Assert
      assertEquals(actual, expected);
    });
  });
});
