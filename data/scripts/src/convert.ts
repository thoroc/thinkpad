import { exportSheet, importSheet } from "jsr:@psych/sheet";
import { exists } from "jsr:@std/fs/exists";
import { resolve } from "jsr:@std/path";
import chalk from "npm:chalk";
import { ExportFileExtension } from "./types.ts";

interface ConvertXlsOptions {
  filepath: string;
  outputDir: string;
  exportFileExtension: ExportFileExtension;
  overwrite?: boolean;
}

export const convertXls = async (
  { filepath, outputDir, exportFileExtension, overwrite }: ConvertXlsOptions,
) => {
  console.log(
    `Converting ${chalk.green(filepath)} to ${
      chalk.yellow(exportFileExtension.toLocaleUpperCase())
    }`,
  );

  const parts = filepath.split("/");
  const filename = parts[parts.length - 1].split(".")[0];
  const outputFilepath = `${outputDir}/${filename}.${exportFileExtension}`;

  if (!await exists(outputFilepath) || overwrite) {
    // get only the filename from the path
    const file = await Deno.readFile(filepath);
    const data = await importSheet(file, "xls");

    await Deno.writeFile(
      resolve(outputDir, `${filename}.${exportFileExtension}`),
      exportSheet(data, exportFileExtension),
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
