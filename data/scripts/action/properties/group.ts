import { GroupedProperties, Property } from "../types.ts";

interface GroupPropertiesOptions {
  properties: Property[];
  excludes?: string[];
}

export const groupProperties = (
  options: GroupPropertiesOptions,
): GroupedProperties => {
  const { properties, excludes } = options;
  const groupedProperties: GroupedProperties = {
    keys: [],
    values: [],
  };

  for (const property of properties) {
    if (excludes) {
      if (excludes.includes(property.name)) {
        continue;
      }
    }

    // if (property.name === "Model" || property.name === "EAN / UPC / JAN") {
    //   continue;
    // }

    if (!groupedProperties.keys.includes(property.name)) {
      groupedProperties.keys.push(property.name);
      groupedProperties.values.push({
        name: property.name,
        values: [],
        filePresent: [],
      });
    }

    const index = groupedProperties.keys.indexOf(property.name);
    groupedProperties.values[index].values.push(...property.values);
    groupedProperties.values[index].filePresent.push(...property.filePresent);
  }

  return groupedProperties;
};
