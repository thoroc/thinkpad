import { assertEquals } from "jsr:@std/assert";
import { describe, it } from "jsr:@std/testing/bdd";
import { toBoolean } from "./boolean.ts";

describe("toBoolean", () => {
  const PositiveTestCases = [
    { Key: "Key", Value: "YES", Expected: { "Key": true } },
    { Key: "Key", Value: "Yes", Expected: { "Key": true } },
    { Key: "Key", Value: "yes", Expected: { "Key": true } },
    { Key: "Key", Value: "Key", Expected: { "Key": true } },
  ];

  for (const { Key, Value, Expected } of PositiveTestCases) {
    it(`should transform positive boolean value for ${Value}`, () => {
      // Arrange
      const options = { Key, Value };

      // Act
      const actual = toBoolean(options);

      // Assert
      assertEquals(actual, Expected);
    });
  }

  const NegativeTestCases = [
    { Key: "Key", Value: "NO", Expected: { "Key": false } },
    { Key: "Key", Value: "No", Expected: { "Key": false } },
    { Key: "Key", Value: "no", Expected: { "Key": false } },
    { Key: "Key", Value: "None", Expected: { "Key": false } },
    { Key: "Key", Value: "NONE", Expected: { "Key": false } },
  ];

  for (const { Key, Value, Expected } of NegativeTestCases) {
    it(`should transform negative boolean value for ${Value}`, () => {
      // Arrange
      const options = { Key, Value };

      // Act
      const actual = toBoolean(options);

      // Assert
      assertEquals(actual, Expected);
    });
  }
});
