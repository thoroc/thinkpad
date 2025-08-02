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

/**
 * Extracts data from an Excel file (.xls or .xlsx), converts it to a specified export format (JSON),
 * and writes the result to an output directory. Handles file existence checks, directory creation,
 * and optional overwriting of existing files.
 *
 * @param filePath - The path to the Excel file to extract data from.
 * @param options - Extraction options, including output directory and force overwrite flag.
 * @returns A promise that resolves when the extraction and conversion are complete.
 *
 * @throws Will throw an error if the input file does not exist or is not an Excel file.
 * @remarks
 * - If the output file already exists and the `force` option is not set, the function will warn and skip writing.
 * - The function logs progress and errors to the console.
 */
export const extractFile = async (
  filePath: string,
  options: ExtractOptions
): Promise<void> => {
  const exportFileExtension = ExportTypes.JSON;

  console.log(
    `Converting ${colors.green(filePath)} to ${colors.yellow(
      exportFileExtension
    )}`
  );

  try {
    const fileExists = await exists(filePath);

    if (!fileExists) {
      throw new Error(`File not found: ${filePath}`);
    }

    if (!filePath.endsWith('.xls') && !filePath.endsWith('.xlsx')) {
      throw new Error(`File is not an Excel file: ${filePath}`);
    }

    const ImpportfileExtension = filePath.endsWith('.xlsx')
      ? ImportTypes.XLSX
      : ImportTypes.XLS;

    const file = await Deno.readFile(filePath);
    // Convert Uint8Array to ArrayBuffer slice
    const fileBuffer = file.buffer.slice(
      file.byteOffset,
      file.byteOffset + file.byteLength
    );
    const data = await importSheet(fileBuffer, ImpportfileExtension);
    const fileConfig = getFileConfig(filePath);
    const outputDir = options.outputDir || fileConfig.path;

    const dirExists = await exists(outputDir);

    if (!dirExists) {
      Deno.mkdir(outputDir, { recursive: true });
    }

    const outputFilepath = resolve(
      outputDir,
      `${fileConfig.name}.${exportFileExtension}`
    );

    // does the file already exist?
    const outputFileExists = await exists(outputFilepath);

    if (outputFileExists && !options.force) {
      console.warn(
        colors.yellow(
          `File already exists: ${outputFilepath}. Use --force to overwrite.`
        )
      );
      return;
    }

    await Deno.writeFile(
      outputFilepath,
      exportSheet(data, exportFileExtension)
    );

    console.log(
      `Converted ${colors.green(filePath)} to ${colors.green(outputFilepath)}`
    );
  } catch (error) {
    console.error(
      colors.red(String(error instanceof Error ? error.message : error))
    );
  }
};
