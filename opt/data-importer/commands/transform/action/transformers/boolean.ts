import { pascalCase } from "npm:string-ts";
import type { Transformed } from "./types.ts";
import { TransformerOptions } from "./types.ts";

/**
 * Transforms a value into a boolean representation based on specific rules.
 *
 * - If the `Value` is already a boolean, returns it as is.
 * - If the `Value` (case-insensitive) is "YES" or matches the `Key` (in PascalCase), returns `true`.
 * - If the `Value` (case-insensitive) is "NO" or "NONE", returns `false`.
 * - Otherwise, returns the original `Value`.
 *
 * @param options - An object containing `Key` and `Value` to be transformed.
 * @returns An object with the transformed value assigned to the given `Key`.
 */
export const toBoolean = (
  { Key, Value }: TransformerOptions,
): Transformed => {
  if (typeof Value === "boolean") {
    return { [Key]: Value };
  }

  if (
    Value.toUpperCase() === "YES" ||
    pascalCase(Key) === pascalCase(Value)
  ) {
    return { [Key]: true };
  }

  const negativeValues = ["NO", "NONE"];

  if (negativeValues.includes(Value.toUpperCase())) {
    return { [Key]: false };
  }

  return { [Key]: Value };
};
