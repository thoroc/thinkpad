import { existsSync } from "jsr:@std/fs";
import chalk from "npm:chalk";
import { convertXls } from "./src/convert.ts";
import { writeExports } from "./src/exports.ts";
import { renameFile } from "./src/rename.ts";
import { generateSchema } from "./src/schemas/mod.ts";
import { ExcelFileExtension } from "./src/types.ts";

interface Options {
  inputDir: string;
  dataDir: string;
  schemaDir: string;
  fileExtension: ExcelFileExtension;
  maxFiles?: number;
}

export const main = async (
  { inputDir, dataDir, fileExtension, maxFiles }: Options,
) => {
  const files = Deno.readDirSync(inputDir);
  let counter = 0;

  if (!existsSync(dataDir)) {
    Deno.mkdirSync(dataDir, { recursive: true });
  }

  if (!existsSync(schemaDir)) {
    Deno.mkdirSync(schemaDir, { recursive: true });
  }

  const datafiles = [];

  for (const file of files) {
    if (maxFiles && counter >= maxFiles && maxFiles !== -1) {
      break;
    }

    const filepath = `${inputDir}/${file.name}`;

    console.log(`\n\n> Processing ${chalk.yellow(filepath)}\n`);

    const xlsFilename = await renameFile({ file, fileExtension });

    if (xlsFilename) {
      const jsonFile = await convertXls({
        filepath: `${inputDir}/${xlsFilename}`,
        outputDir: dataDir,
        exportFileExtension: "json",
      });
      datafiles.push(jsonFile);

      counter++;
    }

    console.log(`\n> Done processing ${chalk.yellow(filepath)}`);
  }

  console.log(`${datafiles[0]}`);

  const T4Type = await generateSchema({
    inputFiles: datafiles,
    filter: "T4",
    outputDir: schemaDir,
  });

  console.log(`\n\n> Generated schema for ${chalk.yellow(T4Type)}`);

  const X2Type = await generateSchema({
    inputFiles: datafiles,
    filter: "X2",
    outputDir: schemaDir,
  });

  console.log(`> Generated schema for ${chalk.yellow(X2Type)}`);

  console.log(`\n\n> Generating exports`);

  writeExports({
    outputDir: schemaDir,
    files: [...T4Type, ...X2Type],
  });

  console.log("\n\n> Done");
};

// get all files in the directory
const inputDir = "data/imports";
const dataDir = "data/clean";
const schemaDir = "data/schemas";

await main({
  inputDir,
  dataDir,
  schemaDir,
  fileExtension: "xls",
  maxFiles: -1,
});
