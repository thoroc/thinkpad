import { emptyDir, existsSync } from "jsr:@std/fs";
import chalk from "npm:chalk";
import { pascalCase } from "npm:string-ts";
import { getFileConfig } from "../file/config.ts";
import { ExcelFileExtension, ExportOptions } from "../types.ts";
import { convertXls } from "./convert.ts";
import { writeExports } from "./exports/mod.ts";
import { generateTypes } from "./mod.ts";
import { renameFile } from "./rename.ts";
import { generateZodSchema } from "./source-code/mod.ts";

interface GenerateOptions {
  inputDir: string;
  dataDir: string;
  schemaDir: string;
  fileExtension: ExcelFileExtension;
}

export const generate = async (
  { inputDir, dataDir, schemaDir, fileExtension }: GenerateOptions,
) => {
  const files = Deno.readDirSync(inputDir);
  const orderedFiles = Array.from(files).sort((a, b) =>
    a.name.localeCompare(b.name)
  );

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

  const datafiles: ExportOptions[] = [];

  for (const file of orderedFiles) {
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

        const generatedTypesOutput = await generateTypes({
          json: JSON.parse(await Deno.readTextFile(dataFile)),
          typeName,
          directory: schemaDir,
        });
        datafiles.push({
          filePath: generatedTypesOutput.filePath,
          exportType: "type",
        });

        const generatedSchemsOutput = await generateZodSchema({
          sourceText: generatedTypesOutput.sourceCode,
          typesImportPath: `./${schemaDir}/${typeName}`,
          directory: schemaDir,
        });

        datafiles.push({
          filePath: generatedSchemsOutput.filePath,
          exportType: "schema",
        });
      }
    }

    console.log(`\n> Done processing ${chalk.yellow(filepath)}`);
  }

  writeExports({
    outputDir: schemaDir,
    files: datafiles,
  });

  console.log(`\n\n> Generated exports`);

  console.log("\n\n> Done");
};
