import { Separator, Transformed } from './types.ts';

export interface TransformToSplitOptions {
  Key: string;
  Value: string;
  Separators: Separator[];
}

/**
 * Transforms a key-value pair by splitting both the key and value using a common separator from the provided list.
 *
 * If both the `Key` and `Value` contain the same separator from `Separators`, the function splits them into arrays,
 * trims whitespace from each part, and returns an array of objects mapping each split key to its corresponding value.
 * If no common separator is found, returns an object with the original key and value.
 *
 * @param options - An object containing:
 *   - `Key`: The string key to be split.
 *   - `Value`: The string value to be split.
 *   - `Separators`: An array of possible separator strings.
 * @returns An array of transformed objects if a common separator is found, or a single object otherwise.
 */
export const transformToSplitProperties = (
  { Key, Value, Separators }: TransformToSplitOptions,
): Transformed | Transformed[] => {
  // check that both Key and Value contains the same Separator from the available Separators and return it
  const separator = Separators.find((separator) =>
    Key.includes(separator) && Value.includes(separator)
  );

  if (!separator) {
    return { [Key]: Value };
  }

  // splitting both the Key and the Value
  const keys = Key.split(separator).map((key) => key.trim());
  const values = Value.split(separator).map((value) => value.trim());

  // return the transformed values
  return keys.map((key, index) => ({ [key]: values[index] }));
};
