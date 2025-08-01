import { FlattenProperties, GroupedProperties } from "../types.ts";

interface FlattenPropertiesOptions {
  properties: GroupedProperties;
}

export const flattenProperties = (
  options: FlattenPropertiesOptions,
): FlattenProperties => {
  const { properties } = options;

  const jsonOutput = {
    keys: properties.keys,
    values: [] as string[],
    filePresent: [] as string[],
  };

  // Flatten the values
  const values = properties.values.map((property) => property.values);
  jsonOutput.values = Array.from(new Set(values.flat())).sort();

  // Flatten the filePresent
  const filePresent = properties.values.map((property) => property.filePresent);
  jsonOutput.filePresent = Array.from(new Set(filePresent.flat())).sort();

  return jsonOutput;
};
