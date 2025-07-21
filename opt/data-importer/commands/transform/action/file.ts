import { exists } from 'jsr:@std/fs';
import { resolve } from 'jsr:@std/path';
import type { JsonStructure } from 'npm:transform_json_keys';
import { transformJsonKeys } from 'npm:transform_json_keys';
import { getFileConfig } from '../../utils/mod.ts';
import { keysToBoolean, splitJsonKeys, SplitSchema } from './keys.ts';
import { TransformOptions } from './types.ts';

export const transformFile = async (
  filePath: string,
  options: TransformOptions,
) => {
  try {
    const fileExists = await exists(filePath);

    if (!fileExists) {
      throw new Error(`File not found: ${filePath}`);
    }

    const fileConfig = getFileConfig(filePath);
    const outputDir = options.outputDir || fileConfig.path;

    const dirExists = await exists(outputDir);

    if (!dirExists) {
      Deno.mkdir(outputDir, { recursive: true });
    }

    const content = await Deno.readTextFile(filePath);
    const data = JSON.parse(content);

    const schema = {
      'Machine Type': 'MachineType',
      'vPro': 'vPro',
      'Multi-touch': 'MultiTouch',
      'SIM Card': 'SimCard',
      'Backlit Keyboard': 'BacklitKeyboard',
      'Fingerprint Reader': 'FingerprintReader',
      'Power Adapter (watt)': 'PowerAdapter',
      'Base Warranty': 'BaseWarranty',
      'Global': 'Global',
      'Ann Date (mm/yy)': 'AnnDate',
    };
    const transformedData: JsonStructure = transformJsonKeys(data, schema);

    const splitSchema = {
      'Memory (soldered + DIMM)': { 'Memory': ['soldered', 'DIMM'] },
      'WLAN & Bluetooth': ['WLAN', 'Bluetooth'],
      'Battery Cells (internal + external)': {
        'BatteryCells': ['internal', 'external'],
      },
    };

    const splitData = splitJsonKeys(
      transformedData,
      splitSchema as SplitSchema,
    );

    const booleanizedData = keysToBoolean(splitData);

    console.log(data[0] ?? 'No data');
    console.log((transformedData as Record<string, string>)[0] ?? 'No data');
    console.log((splitData as Record<string, string>)[0] ?? 'No data');
    console.log((booleanizedData as Record<string, string>)[0] ?? 'No data');

    const outputFilepath = resolve(
      outputDir,
      `${fileConfig.name}.${fileConfig.extension}`,
    );

    await Deno.writeTextFile(
      outputFilepath,
      JSON.stringify(transformedData, null, 2),
    );
  } catch (error) {
    console.error(error);
  }
};
