import { colors } from "jsr:@cliffy/ansi@1.0.0-rc.7/colors";
import { flattenProperties } from "./properties/flatten.ts";
import { groupProperties } from "./properties/group.ts";
import { Property } from "./types.ts";

interface CheckDataShapeOptions {
  properties: Property[];
}

type TestData = { input: string; expected: any };

export const checkTestDataAction = (options: CheckDataShapeOptions) => {
  const { properties } = options;

  console.log(colors.bold(colors.yellow("Checking test data...")));

  const groupedProperties = groupProperties({ properties });
  const flatProperties = flattenProperties({ properties: groupedProperties });

  // console.log(flatProperties);

  if (!flatProperties.keys || flatProperties.keys.length === 0) {
    console.log("No properties found.");
    return;
  }

  if (flatProperties.values.length === 0) {
    console.log("No properties found in test data.");
    return;
  }

  const transformerTestData: Record<string, string> = {
    "memory":
      "opt/data-importer/commands/transform/action/transformers/memory/system.fixtures.json",
  };

  const loadTestData = Deno.readTextFileSync(
    `${Deno.cwd()}/${transformerTestData["memory"]}`,
  );
  const testDataProperties: TestData[] = JSON.parse(loadTestData);

  console.log(
    colors.yellow(`${Object.keys(testDataProperties).length}`),
    "test data properties found",
  );

  console.log(
    colors.yellow(`${flatProperties.values.length}`),
    "properties values found",
  );

  const testDataInputs = Object.values(testDataProperties).map(
    (value) => value.input,
  );
  // console.log("Test data inputs:", testDataInputs);

  const notInTestData = flatProperties.values.filter((input) =>
    !testDataInputs.includes(input)
  );
  console.log("Values not in test data:", notInTestData);

  const notInProperties = testDataInputs.filter((input) =>
    !flatProperties.values.includes(input)
  );
  console.log("Values not in properties:", notInProperties);

  console.log(
    "Test data length matches properties length:",
    Object.keys(testDataProperties).length === flatProperties.values.length,
  );
};
