import chalk from 'npm:chalk';
import { pascalCase } from 'npm:string-ts';
import type { JsonStructure } from 'npm:transform_json_keys';

export type SplitSchema = Record<
  string,
  Record<string, Array<string>> | Array<string>
>;
export type SplitJsonStructure = Record<string, Record<string, string>>;

const _example = {
  'Memory (soldered + DIMM)': { 'Memory': ['soldered', 'DIMM'] },
  'WLAN & Bluetooth': { 'WLANBluetooth': ['WLAN', 'Bluetooth'] },
  'WWAN / M.2 SSD': { 'WWANM2Ssd': ['WWAN', 'M.2 SSD'] },
  'Smart Card Reader / M.2 SSD': {
    'SmartCardReaderM2Ssd': ['Smart Card Reader', 'M.2 SSD'],
  },
  'Battery Cells (internal + external)': {
    'BatteryCells': ['internal', 'external'],
  },
};

export const splitJsonKeys = (
  data: JsonStructure,
  schema: SplitSchema,
) => {
  if (!data) {
    return data;
  }

  for (const key of Object.keys(schema)) {
    if (data[key as keyof JsonStructure] === undefined) {
      console.warn(`Key '${key}' not found in data.`);
      continue;
    }

    const originalValue: string = data[key as keyof JsonStructure];
    // console.log("original value:", originalValue);
    const splitValues = originalValue.split('+');
    // console.log("split values:", splitValues);

    if (schema[key] instanceof Array) {
      const newKeys = schema[key] as Array<string>;
      (data as Record<string, string>)[newKeys[0]] = splitValues[0].trim();
      (data as Record<string, string>)[newKeys[1]] = splitValues[1].trim();
      delete data[key as keyof JsonStructure];
      continue;
    } else {
      for (const currKey of Object.keys(schema[key])) {
        // console.log("current key:", currKey);

        const newKeys = schema[key][currKey];

        // console.log("new keys:", newKeys);

        (data as SplitJsonStructure)[currKey] = {
          [newKeys[0]]: splitValues[0].trim(),
          [newKeys[1]]: splitValues[1].trim(),
        };
      }
    }
    delete data[key as keyof JsonStructure];
  }

  return data;
};

export const keysToBoolean = (data: JsonStructure) => {
  if (!data) {
    return data;
  }

  for (const key of Object.keys(data)) {
    const value = data[key as keyof JsonStructure];

    if (
      value === 'Yes' ||
      pascalCase(key) === pascalCase(value)
    ) {
      console.log(
        chalk.yellow(`Setting ${key} to true where value is ${value}`),
      );

      (data as Record<string, boolean>)[key] = true;
    } else if (['No', 'None'].includes(value)) {
      console.log(
        chalk.yellow(`Setting ${key} to false where value is ${value}`),
      );

      (data as Record<string, boolean>)[key] = false;
    }
  }

  return data;
};
