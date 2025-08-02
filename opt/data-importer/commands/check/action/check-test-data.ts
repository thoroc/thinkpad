import { colors } from 'jsr:@cliffy/ansi@1.0.0-rc.7/colors';
import { existsSync } from 'jsr:@std/fs/exists';
import { flattenProperties } from './properties/flatten.ts';
import { groupProperties } from './properties/group.ts';
import {
  FlattenProperties,
  GroupedProperties,
  OutputType,
  Property,
  TransformerFixtures,
} from './types.ts';

interface CheckDataShapeOptions {
  properties: Property[];
  propertyName: string;
  outputType?: OutputType;
}

// deno-lint-ignore no-explicit-any
type TestData = { input: string; expected: any };

export const checkTestDataAction = (options: CheckDataShapeOptions) => {
  const { properties, propertyName, outputType } = options;

  console.log(colors.bold(colors.yellow('Checking test data...')));

  const groupedProperties: GroupedProperties = groupProperties({ properties });
  const flatProperties: FlattenProperties = flattenProperties({
    properties: groupedProperties,
  });

  // console.log(flatProperties);

  if (!flatProperties.keys || flatProperties.keys.length === 0) {
    console.log('No properties found.');
    return;
  }

  if (flatProperties.values.length === 0) {
    console.log('No properties found in test data.');
    return;
  }

  const fixtureFilePath = `${Deno.cwd()}/${TransformerFixtures[propertyName]}`;
  const fixtureFileExists = existsSync(fixtureFilePath);

  if (fixtureFileExists) {
    const loadTestData = Deno.readTextFileSync(fixtureFilePath);

    console.log(
      colors.yellow(
        `Loading test data from: ${TransformerFixtures[propertyName]}`
      )
    );

    const testDataProperties: TestData[] = JSON.parse(loadTestData);

    console.log(
      colors.yellow(`${flatProperties.values.length}`),
      'properties values found'
    );

    console.log(
      colors.yellow(`${Object.keys(testDataProperties).length}`),
      'test data properties found'
    );

    const testDataInputs = Object.values(testDataProperties).map(
      (value) => value.input
    );
    // console.log("Test data inputs:", testDataInputs);
    const notInTestData = flatProperties.values.filter(
      (input) => !testDataInputs.includes(input)
    );
    console.log('Values not in test data:', notInTestData);

    const notInProperties = testDataInputs.filter(
      (input) => !flatProperties.values.includes(input)
    );
    console.log('Values not in properties:', notInProperties);

    console.log(
      'Test data length matches properties length:',
      Object.keys(testDataProperties).length === flatProperties.values.length
    );

    console.log(
      `
Run the following command to sort the fixtures once you have added the new test data:

  jq 'group_by(.input) | map(.[0]) | sort_by(.input)' ${Deno.cwd()}/${
        TransformerFixtures[propertyName]
      } > tmp.json && mv tmp.json ${Deno.cwd()}/${
        TransformerFixtures[propertyName]
      }`
    );

    if (outputType) {
      console.log(
        notInTestData.map((value) => {
          return { input: value, expected: null };
        })
      );
    }
  } else {
    console.log(
      colors.red(`Fixture file not found: ${TransformerFixtures[propertyName]}`)
    );

    // create new test data file
    console.log(
      colors.yellow(`Creating new test data file at: ${fixtureFilePath}`)
    );

    const newTestData: TestData[] = flatProperties.values.map((value) => ({
      input: value,
      expected: {},
    }));

    Deno.writeTextFileSync(
      fixtureFilePath,
      JSON.stringify(newTestData, null, 2)
    );
    console.log(
      colors.green(`New test data file created at: ${fixtureFilePath}`)
    );
  }
};
