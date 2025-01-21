import { assertEquals } from "jsr:@std/assert";
import { describe, it } from "jsr:@std/testing/bdd";
import { getFileConfig } from "./config.ts";

describe("getFileConfig", () => {
  const testCases = [
    {
      input: "data/scripts/src/file/config.ts",
      expected: {
        name: "config",
        extension: "ts",
        parentDir: "file",
        path: "data/scripts/src/file",
        root: "data",
      },
    },
    {
      input: "data/scripts/src/file/name.ts",
      expected: {
        name: "name",
        extension: "ts",
        parentDir: "file",
        root: "data",
        path: "data/scripts/src/file",
      },
    },
    {
      input: "data/scripts/src/file/name.test.ts",
      expected: {
        name: "name",
        extension: "ts",
        parentDir: "file",
        root: "data",
        path: "data/scripts/src/file",
      },
    },
    {
      input: "src/foo/baa/filename.ts",
      expected: {
        name: "filename",
        extension: "ts",
        parentDir: "baa",
        root: "src",
        path: "src/foo/baa",
      },
    },
    {
      input: "./src/foo/baa/filename.ts",
      expected: {
        name: "filename",
        extension: "ts",
        parentDir: "baa",
        root: "src",
        path: "src/foo/baa",
      },
    },
    {
      input: "./src/foo/baa/filename",
      expected: {
        name: "filename",
        extension: undefined,
        parentDir: "baa",
        root: "src",
        path: "src/foo/baa",
      },
    },
  ];

  testCases.forEach(({ input, expected }) => {
    it(`should return the file config for ${input}`, () => {
      // Act
      const actual = getFileConfig(input);

      // Assert
      assertEquals(actual, expected);
    });
  });
});
