import { Property } from "../types.ts";

interface FilterPropertiesOptions {
  properties: Property[];
  names: string[];
}

export const filterPropertiesByNames = (
  options: FilterPropertiesOptions,
): Property[] => {
  const { properties, names } = options;

  if (!names || names.length === 0 || names.includes("all")) {
    return properties;
  }

  return properties.filter((property) => names.includes(property.name));
};
