import { colors } from "jsr:@cliffy/ansi@1.0.0-rc.8/colors";
import { Command } from "jsr:@cliffy/command@1.0.0-rc.8";

// Script to find all the possible values for the properties in the extracted JSON files
// This script reads all JSON files in the ./data/extracted directory and collects unique values for
// each property across all files. It then prints the property name, the files it appears in,
// and the unique values found for that property.

// list all JSON files

interface CheckDataShapeOptions {
  inputPath: string;
  selectedProperties: string[];
  grouped?: boolean;
}

const checkDataShapeAction = (options: CheckDataShapeOptions) => {
  const { inputPath, selectedProperties, grouped } = options;

  const jsonFiles = Deno.readDirSync(inputPath)
    .filter((file) => file.isFile && file.name.endsWith(".json"));

  interface Property {
    name: string;
    filePresent: string[];
    values: string[];
  }

  const properties: Property[] = [];

  for (const file of jsonFiles) {
    const filePath = `./data/extracted/${file.name}`;
    const content = Deno.readTextFileSync(filePath);
    const data = JSON.parse(content);

    console.log(`Processing file: ${file.name}`);

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

const cli = new Command()
  .name("check-data-shape")
  .description("Check the shape of data in extracted JSON files")
  .option(
    "-i, --input-path <inputPath:string>",
    "Path to the directory containing JSON files",
    {
      default: "./data/extracted",
    },
  )
  .option(
    "-s, --selected-properties <selectedProperties:string>",
    "The properties to output",
    {
      default: "all",
      collect: true,
    },
  )
  .option("-g, --grouped", "Group the properties")
  .action((options) => {
    checkDataShapeAction(options);
  });

if (import.meta.main) {
  cli.parse(Deno.args);
}
