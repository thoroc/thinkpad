import { colors } from 'jsr:@cliffy/ansi@1.0.0-rc.8/colors';
import { OutputType, Property } from '../types.ts';
import { flattenProperties } from './flatten.ts';
import { groupProperties } from './group.ts';

interface PrintPropertiesOptions {
  properties: Property[];
  outputType: OutputType;
  grouped?: boolean;
}

export const printProperties = (options: PrintPropertiesOptions) => {
  const { properties, outputType = OutputType.JSON, grouped } = options;

  if (grouped) {
    const groupedProperties = groupProperties({ properties });

    if (outputType === OutputType.JSON) {
      const jsonOutput = flattenProperties({ properties: groupedProperties });
      console.log(JSON.stringify(jsonOutput, null, 2));
      return;
    }

    // 1 header composed of the properties names
    const header = groupedProperties.keys
      .map((property) => colors.cyan(property))
      .join(' | ');
    console.log(colors.bold(header));

    // 2 rows with the values
    const rows = groupedProperties.values
      .map((property) => {
        const uniqueValues = Array.from(new Set(property.values)).sort();
        return uniqueValues.map((value) => colors.green(value)).join(' | ');
      })
      .join(' | ');

    console.log(rows);
    return;
  }

  // Output the properties
  for (const property of properties) {
    if (property.name !== 'Model' && property.name !== 'EAN / UPC / JAN') {
      const uniqueValues = Array.from(new Set(property.values)).sort();

      if (outputType === OutputType.JSON) {
        console.log(
          JSON.stringify(
            {
              property: property.name,
              values: uniqueValues,
              files: property.filePresent,
            },
            null,
            2
          )
        );
        continue;
      } else if (outputType === OutputType.RAW) {
        console.log(`Property: ${colors.yellow(property.name)}`);
        console.log(`Files: ${colors.blue(property.filePresent.join(', '))}`);
        console.log(
          `Values: [\n\t- ${uniqueValues
            .map((value) => colors.green(value))
            .join('\n\t- ')}\n]`
        );
      }
      console.log('-----------------------------');
    }
  }

  console.log('Total properties found:', properties.length);
  // for (const property of properties) {
  //   console.log(`Property: ${colors.yellow(property.name)}`);
  // }
};
