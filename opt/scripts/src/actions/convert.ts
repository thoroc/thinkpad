import { exportSheet, importSheet } from "jsr:@psych/sheet";
import { exists } from "jsr:@std/fs/exists";
import { resolve } from "jsr:@std/path";
import chalk from "npm:chalk";
import { getFileConfig } from "../file/config.ts";
import { ExportFileExtension } from "../types.ts";

interface ConvertXlsOptions {
  filepath: string;
  outputDir: string;
  exports: { fileExtension: ExportFileExtension };
  overwrite?: boolean;
}

export const convertXls = async (
  { filepath, outputDir, exports, overwrite }: ConvertXlsOptions,
) => {
  console.log(
    `Converting ${chalk.green(filepath)} to ${
      chalk.yellow(exports.fileExtension.toLocaleUpperCase())
    }`,
  );

  const filename = getFileConfig(filepath).name;
  const outputFilepath = `${outputDir}/${filename}.${exports.fileExtension}`;

  if (!await exists(outputFilepath) || overwrite) {
    // get only the filename from the path
    const file = await Deno.readFile(filepath);
    const data = await importSheet(file, "xls");

    await Deno.writeFile(
      resolve(outputDir, `${filename}.${exports.fileExtension}`),
      exportSheet(data, exports.fileExtension),
    );
    console.log(
      `Converted ${chalk.green(filepath)} to ${chalk.green(outputFilepath)}`,
    );
  } else {
    console.log(
      `Skipping ${
        chalk.green(filepath)
      }: File existing and will not be overwriten: `,
    );
  }

  return outputFilepath;
};
