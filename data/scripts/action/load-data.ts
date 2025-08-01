import { Property } from "./types.ts";

export const loadProperties = (inputPath: string): Property[] => {
  const jsonFiles = Deno.readDirSync(inputPath)
    .filter((file) => file.isFile && file.name.endsWith(".json"));

  const properties: Property[] = [];

  for (const file of jsonFiles) {
    const filePath = `${inputPath}/${file.name}`;
    const content = Deno.readTextFileSync(filePath);
    const data = JSON.parse(content);

    for (const d of data) {
      for (const [key, value] of Object.entries(d)) {
        let property = properties.find((p) => p.name === key);
        if (!property) {
          property = { name: key, filePresent: [], values: [] };
          properties.push(property);
        }
        if (!property.filePresent.includes(file.name)) {
          property.filePresent.push(file.name);
        }
        property.values.push(...(Array.isArray(value) ? value : [value]));
      }
    }
  }

  // Sort properties by name
  properties.sort((a, b) => a.name.localeCompare(b.name));

  return properties;
};
