import { colors } from "jsr:@cliffy/ansi@1.0.0-rc.8/colors";
import { emptyDir, existsSync } from "jsr:@std/fs";
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

/**
 * Generates data files and corresponding TypeScript types and Zod schemas from input files.
 *
 * This function processes files from the specified input directory, converts them (e.g., from XLS to JSON),
 * generates TypeScript types and Zod schemas for each file, and writes the outputs to the provided data and schema directories.
 * It ensures the output directories are created and emptied before generation.
 *
 * @param options - The generation options.
 * @param options.inputDir - The directory containing the input files to process.
 * @param options.dataDir - The directory where converted data files will be written.
 * @param options.schemaDir - The directory where generated TypeScript types and Zod schemas will be written.
 * @param options.fileExtension - The file extension to use for output files.
 *
 * @remarks
 * - The function sorts input files alphabetically before processing.
 * - For each file, it attempts to rename, convert, and generate types and schemas.
 * - The function logs progress and completion status to the console.
 */
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

    console.log(`\n\n> Processing ${colors.yellow(filepath)}\n`);

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

    console.log(`\n> Done processing ${colors.yellow(filepath)}`);
  }

  writeExports({
    outputDir: schemaDir,
    files: datafiles,
  });

  console.log(`\n\n> Generated exports`);

  console.log("\n\n> Done");
};
