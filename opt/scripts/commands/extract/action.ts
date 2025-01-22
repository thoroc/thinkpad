import { exportSheet, ExportTypes, importSheet } from 'jsr:@psych/sheet';
import { exists } from 'jsr:@std/fs';
import { resolve } from 'jsr:@std/path';
import chalk from 'npm:chalk';
import figlet from 'npm:figlet';
import { getFileConfig } from '../utils/mod.ts';

interface ExtractActionOptions {
  outputDir?: string;
  fileExtension?: string;
}

export const extractAction = async (
  options: ExtractActionOptions,
  source: string,
) => {
  console.debug(
    "extract command called for '%s' with options: %o",
    source,
    options,
  );
  console.log(
    chalk.bold.yellow(
      figlet.textSync('Extract data', { font: 'Larry 3D' }),
    ),
  );

  // check that the file exists
  try {
    const fileExists = await exists(source);

    if (!fileExists) {
      throw new Error(`File not found: ${source}`);
    }

    const file = await Deno.readFile(source);
    const fileConfig = getFileConfig(source);
    const outputDir = options.outputDir || fileConfig.path;

    const dirExists = await exists(outputDir);

    if (!dirExists) {
      Deno.mkdir(outputDir, { recursive: true });
    }

    const fileExtension = (options.fileExtension || 'json') as ExportTypes;
    const data = await importSheet(file, 'xls');
    const outputFilepath = resolve(
      outputDir,
      `${fileConfig.name}.${fileExtension}`,
    );

    await Deno.writeFile(
      outputFilepath,
      exportSheet(data, fileExtension),
    );

    console.log(
      `Converted ${chalk.green(source)} to ${chalk.green(outputFilepath)}`,
    );
  } catch (error) {
    console.error(chalk.red(error));
  }
};
