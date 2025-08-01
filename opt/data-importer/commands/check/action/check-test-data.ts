import { colors } from 'jsr:@cliffy/ansi@1.0.0-rc.7/colors';
import { flattenProperties } from './properties/flatten.ts';
import { groupProperties } from './properties/group.ts';
import { OutputType, Property } from './types.ts';

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

  const groupedProperties = groupProperties({ properties });
  const flatProperties = flattenProperties({ properties: groupedProperties });

  // console.log(flatProperties);

  if (!flatProperties.keys || flatProperties.keys.length === 0) {
    console.log('No properties found.');
    return;
  }

  if (flatProperties.values.length === 0) {
    console.log('No properties found in test data.');
    return;
  }

  const basePath = 'opt/data-importer/commands/transform/action/transformers';

  const transformerTestData: Record<string, string> = {
    'battery': `${basePath}/battery-cells.fixtures.json`,
    'camera': `${basePath}/camera.fixtures.json`,
    'display': `${basePath}/display.fixtures.json`,
    'graphics': `${basePath}/graphics.fixtures.json`,
    'processor': `${basePath}/processor.fixtures.json`,
    'memory': `${basePath}/memory/system.fixtures.json`,
    'power-adapter': `${basePath}/power-adapter.fixtures.json`,
    'wlan': `${basePath}/wlan-device.fixtures.json`,
    'wwan': `${basePath}/wwan-device.fixtures.json`,
    'warranty': `${basePath}/warranty.fixtures.json`,
  };

  const loadTestData = Deno.readTextFileSync(
    `${Deno.cwd()}/${transformerTestData[propertyName]}`,
  );

  console.log(colors.yellow(
    `Loading test data from: ${transformerTestData[propertyName]}`,
  ));

  const testDataProperties: TestData[] = JSON.parse(loadTestData);

  console.log(
    colors.yellow(`${Object.keys(testDataProperties).length}`),
    'test data properties found',
  );

  console.log(
    colors.yellow(`${flatProperties.values.length}`),
    'properties values found',
  );

  const testDataInputs = Object.values(testDataProperties).map(
    (value) => value.input,
  );
  // console.log("Test data inputs:", testDataInputs);

  const notInTestData = flatProperties.values.filter((input) => !testDataInputs.includes(input));
  console.log('Values not in test data:', notInTestData);

  const notInProperties = testDataInputs.filter((input) => !flatProperties.values.includes(input));
  console.log('Values not in properties:', notInProperties);

  console.log(
    'Test data length matches properties length:',
    Object.keys(testDataProperties).length === flatProperties.values.length,
  );

  console.log(
    `Run the following command to sort the fixtures once you have added the new test data:
    jq 'group_by(.input) | map(.[0]) | sort_by(.input)' ${Deno.cwd()}/${
      transformerTestData[propertyName]
    } > tmp.json && mv tmp.json ${Deno.cwd()}/${transformerTestData[propertyName]}`,
  );

  if (outputType) {
    console.log(notInTestData.map((value) => {
      return { input: value, expected: null };
    }));
  }
};
