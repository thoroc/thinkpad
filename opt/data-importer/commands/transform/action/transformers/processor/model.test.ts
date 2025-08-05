import { assertEquals } from "jsr:@std/assert";
import { describe, it } from "jsr:@std/testing/bdd";
import testCases from "./model.fixtures.json" with { type: "json" };
import { Model, toModel } from "./model.ts";

describe("toModel", () => {
  for (
    const { input, expected } of Object.values(testCases) as Array<{ input: string; expected: Model }>
  ) {
    it(`should transform "${input}" to model`, () => {
      // Act
      const result = toModel(input);

      // Assert
      assertEquals(result, expected);
    });
  }
});