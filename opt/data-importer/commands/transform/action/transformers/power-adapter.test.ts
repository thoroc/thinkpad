import { assertEquals } from "jsr:@std/assert";
import { describe, it } from "jsr:@std/testing/bdd";
import testCases from "./power-adapter.fixtures.json" with { type: "json" };
import { PowerAdapter, toPowerAdapter } from "./power-adapter.ts";

describe("toPowerAdapter", () => {
  for (
    const { input, expected }
      of (testCases as Array<{ input: string; expected: PowerAdapter }>)
  ) {
    it(`should parse "${input}" correctly`, () => {
      // Act
      const result = toPowerAdapter(input);

      // Assert
      assertEquals(result, expected);
    });
  }
});
