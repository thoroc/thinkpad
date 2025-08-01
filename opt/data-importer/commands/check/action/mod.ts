import { colors } from "jsr:@cliffy/ansi@1.0.0-rc.8/colors";
import { checkTestDataAction } from "./check-test-data.ts";
import { loadProperties } from "./load-data.ts";
import { filterPropertiesByNames } from "./properties/filter.ts";
import { printProperties } from "./properties/print.ts";
import { OutputType } from "./types.ts";

interface CheckDataShapeOptions {
  inputPath: string;
  selectedProperties?: string[];
  grouped?: boolean;
  list?: boolean;
  outputType: string;
  detailed?: boolean;
  checkTestData?: string;
}

export const checkDataShapeAction = (options: CheckDataShapeOptions) => {
  const {
    inputPath,
    selectedProperties,
    grouped = false,
    list = false,
    outputType = OutputType.JSON,
    detailed = false,
    checkTestData = false,
  } = options;

  let properties = loadProperties(inputPath);

  if (selectedProperties && selectedProperties.length >= 0) {
    properties = filterPropertiesByNames({
      properties,
      names: selectedProperties,
    });
  }

  if (checkTestData) {
    const checkTestDataOptions = {
      properties: selectedProperties
        ? properties.filter((p) => selectedProperties.includes(p.name))
        : properties,
      propertyName: checkTestData,
      outputType: undefined as OutputType | undefined,
    };

    if (outputType === OutputType.JSON) {
      checkTestDataOptions.outputType = outputType as OutputType;
    }

    checkTestDataAction(checkTestDataOptions);
    return;
  }

  if (list) {
    console.log("Properties found:");
    for (const property of properties) {
      console.log(`- ${colors.yellow(property.name)}`);
    }
    return;
  }

  printProperties({
    properties,
    outputType: outputType as OutputType,
    grouped,
  });

  if (detailed) {
    // Output the properties
    for (const property of properties) {
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
  }
};
