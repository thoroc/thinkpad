import { colors } from 'jsr:@cliffy/ansi@1.0.0-rc.8/colors';
import {
  exportSheet,
  ExportTypes,
  importSheet,
  ImportTypes,
} from 'jsr:@psych/sheet';
import { exists } from 'jsr:@std/fs';
import { resolve } from 'jsr:@std/path';
import { getFileConfig } from '../../utils/mod.ts';
import { ExtractOptions } from './types.ts';

export const extractFile = async (
  filePath: string,
  options: ExtractOptions
): Promise<void> => {
  const fileExtension = options.fileExtension || 'json';

  console.log(
    `Converting ${colors.green(filePath)} to ${colors.yellow(fileExtension)}`
  );

  try {
    const fileExists = await exists(filePath);

    if (!fileExists) {
      throw new Error(`File not found: ${filePath}`);
    }

    if (!filePath.endsWith('.xls') && !filePath.endsWith('.xlsx')) {
      throw new Error(`File is not an Excel file: ${filePath}`);
    }

    const fileExtension = filePath.endsWith('.xlsx')
      ? ImportTypes.XLSX
      : ImportTypes.XLS;

    const file = await Deno.readFile(filePath);
    // Convert Uint8Array to ArrayBuffer slice
    const fileBuffer = file.buffer.slice(
      file.byteOffset,
      file.byteOffset + file.byteLength
    );
    const data = await importSheet(fileBuffer, fileExtension);
    const fileConfig = getFileConfig(filePath);
    const outputDir = options.outputDir || fileConfig.path;

    const dirExists = await exists(outputDir);

    if (!dirExists) {
      Deno.mkdir(outputDir, { recursive: true });
    }

    const outputFilepath = resolve(
      outputDir,
      `${fileConfig.name}.${fileExtension}`
    );

    await Deno.writeFile(outputFilepath, exportSheet(data, ExportTypes.JSON));

    console.log(
      `Converted ${colors.green(filePath)} to ${colors.green(outputFilepath)}`
    );
  } catch (error) {
    console.error(
      colors.red(String(error instanceof Error ? error.message : error))
    );
  }
};
