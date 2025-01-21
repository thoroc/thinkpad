import { emptyDir, existsSync } from "jsr:@std/fs";
import chalk from "npm:chalk";
import { pascalCase } from "npm:string-ts";
import { getFileConfig } from "../file/config.ts";
import { ExcelFileExtension } from "../types.ts";
import { convertXls } from "./convert.ts";
import { writeExports } from "./exports/mod.ts";
import { generateTypes } from "./mod.ts";
import { renameFile } from "./rename.ts";
import { generateZodSchema } from "./source-code/mod.ts";

interface Options {
  inputDir: string;
  dataDir: string;
  schemaDir: string;
  fileExtension: ExcelFileExtension;
}

export const generate = async (
  { inputDir, dataDir, schemaDir, fileExtension }: Options,
) => {
  const files = Deno.readDirSync(inputDir);

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
    const filepath = `${inputDir}/${file.name}`;

    console.log(`\n\n> Processing ${chalk.yellow(filepath)}\n`);

    const xlsFilename = await renameFile({ file, fileExtension });

    if (xlsFilename) {
      const dataFile = await convertXls({
        filepath: `${inputDir}/${xlsFilename}`,
        outputDir: dataDir,
        exports: { fileExtension: "json" },
      });

      const fileConfig = getFileConfig(filepath);

      if (dataFile) {
        const typeName = pascalCase(fileConfig.name);

        const generatedOutput = await generateTypes({
          json: JSON.parse(await Deno.readTextFile(dataFile)),
          typeName,
          directory: schemaDir,
        });

        await generateZodSchema({
          sourceText: generatedOutput.sourceCode,
          typesImportPath: `./${schemaDir}/${typeName}`,
          directory: schemaDir,
        });

        datafiles.push(dataFile);
      }
    }

    console.log(`\n> Done processing ${chalk.yellow(filepath)}`);
  }

  writeExports({
    outputDir: schemaDir,
    files: datafiles,
    exports: {
      types: true,
      schemas: true,
    },
  });

  console.log(`\n\n> Generated exports`);

  console.log("\n\n> Done");
};
