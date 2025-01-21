import { emptyDir, existsSync } from "jsr:@std/fs";
import chalk from "npm:chalk";
import { convertXls } from "./convert.ts";
import { writeExports } from "./exports/write.ts";
import { renameFile } from "./rename.ts";
import { generateSchemas } from "./schemas/mod.ts";
import { ExcelFileExtension } from "./types.ts";

interface Options {
  inputDir: string;
  dataDir: string;
  schemaDir: string;
  fileExtension: ExcelFileExtension;
  maxFiles?: number;
}

export const generateTypes = async (
  { inputDir, dataDir, schemaDir, fileExtension, maxFiles }: Options,
) => {
  const files = Deno.readDirSync(inputDir);
  let counter = 0;

  if (!existsSync(dataDir)) {
    Deno.mkdirSync(dataDir, { recursive: true });
  } else {
    emptyDir(dataDir);
  }

  if (!existsSync(schemaDir)) {
    Deno.mkdirSync(schemaDir, { recursive: true });
  } else {
    emptyDir(schemaDir);
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

  const T4Type = await generateSchemas({
    inputFiles: datafiles,
    filter: "T4",
    outputDir: schemaDir,
  });

  const X2Type = await generateSchemas({
    inputFiles: datafiles,
    filter: "X2",
    outputDir: schemaDir,
  });

  console.log(`\n\n> Generating exports`);

  writeExports({
    outputDir: schemaDir,
    files: [...T4Type, ...X2Type],
    exports: {
      types: true,
      schemas: true,
    },
  });

  console.log("\n\n> Done");
};
