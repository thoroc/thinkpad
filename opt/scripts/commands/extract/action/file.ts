import { exportSheet, ExportTypes, importSheet } from 'jsr:@psych/sheet';
import { exists } from 'jsr:@std/fs';
import { resolve } from 'jsr:@std/path';
import chalk from 'npm:chalk';
import { getFileConfig } from '../../utils/mod.ts';
import { ExtractOptions } from './types.ts';

export const extractFile = async (
  filePath: string,
  options: ExtractOptions,
): Promise<void> => {
  const fileExtension = options.fileExtension || 'json';

  console.log(
    `Converting ${chalk.green(filePath)} to ${chalk.yellow(fileExtension)}`,
  );

  try {
    const fileExists = await exists(filePath);

    if (!fileExists) {
      throw new Error(`File not found: ${filePath}`);
    }

    if (!filePath.endsWith('.xls') && !filePath.endsWith('.xlsx')) {
      throw new Error(`File is not an Excel file: ${filePath}`);
    }

    const file = await Deno.readFile(filePath);
    const fileConfig = getFileConfig(filePath);
    const outputDir = options.outputDir || fileConfig.path;

    const dirExists = await exists(outputDir);

    if (!dirExists) {
      Deno.mkdir(outputDir, { recursive: true });
    }

    const data = await importSheet(file, 'xls');
    const outputFilepath = resolve(
      outputDir,
      `${fileConfig.name}.${fileExtension}`,
    );

    await Deno.writeFile(
      outputFilepath,
      exportSheet(data, 'json' as ExportTypes),
    );

    console.log(
      `Converted ${chalk.green(filePath)} to ${chalk.green(outputFilepath)}`,
    );
  } catch (error) {
    console.error(chalk.red(error));
  }
};
