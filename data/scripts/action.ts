import { colors } from "jsr:@cliffy/ansi@1.0.0-rc.8/colors";
import { loadProperties } from "./load-data.ts";

interface CheckDataShapeOptions {
  inputPath: string;
  selectedProperties: string[];
  grouped?: boolean;
  list?: boolean;
}

export const checkDataShapeAction = (options: CheckDataShapeOptions) => {
  const { inputPath, selectedProperties, grouped, list } = options;

  const properties = loadProperties(inputPath);

  if (list) {
    console.log("Properties found:");
    for (const property of properties) {
      console.log(`- ${colors.yellow(property.name)}`);
    }
    return;
  }

  const toOutputProperties = properties.filter((property) => {
    if (selectedProperties.includes("all")) return true;
    return selectedProperties.includes(property.name);
  });

  if (grouped) {
    // 1 header composed of the properties names
    const header = toOutputProperties.map((property) =>
      colors.cyan(property.name)
    ).join(" | ");
    console.log(colors.bold(header));

    // 2 rows with the values
    const rows = toOutputProperties.map((property) => {
      const uniqueValues = Array.from(new Set(property.values)).sort();
      return uniqueValues.map((value) => colors.green(value)).join(" | ");
    }).join(" | ");

    console.log(rows);
    return;
  }

  // Output the properties
  for (const property of toOutputProperties) {
    if (property.name !== "Model" && property.name !== "EAN / UPC / JAN") {
      const uniqueValues = Array.from(new Set(property.values)).sort();
      console.log(`Property: ${colors.yellow(property.name)}`);
      console.log(`Files: ${colors.blue(property.filePresent.join(", "))}`);
      console.log(
        `Values: [\n\t- ${
          uniqueValues.map((v) => colors.green(v)).join(",\n\t- ")
        }\n]`,
      );
      console.log("-----------------------------");
    }
  }

  console.log("Total properties found:", properties.length);
  // for (const property of properties) {
  //   console.log(`Property: ${colors.yellow(property.name)}`);
  // }
};
