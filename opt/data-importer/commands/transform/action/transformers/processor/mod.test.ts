import { assertEquals } from "jsr:@std/assert";
import { describe, it } from "jsr:@std/testing/bdd";
import testCases from "./mod.fixtures.json" with { type: "json" };
import { Processor, toProcessor } from "./mod.ts";

describe("toProcessor", () => {
  for (
    const { input, expected } of (testCases as Array<{ input: string; expected: Processor }>)
  ) {
    it(`should transform "${input}" to processor`, () => {
      // Act
      const result = toProcessor(input);

      // Assert
      assertEquals(result, expected);
    });
  }
});
