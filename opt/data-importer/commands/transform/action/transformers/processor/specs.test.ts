import { assertEquals } from "jsr:@std/assert";
import { describe, it } from "jsr:@std/testing/bdd";
import testCases from "./specs.fixtures.json" with { type: "json" };
import { Specs, toSpecs } from "./specs.ts";

describe("toSpecs", () => {
  for (
    const { input, expected } of (testCases as Array<{ input: string; expected: Specs }>)
  ) {
    it(`should transform "${input}" to specs`, () => {
      // Act
      const result = toSpecs(input);

      // Assert
      assertEquals(result, expected);
    });
  }
});