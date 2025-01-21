import chalk from "npm:chalk";
import { pascalCase } from "npm:string-ts";
import { getFileConfig } from "../file/config.ts";
import { generateSchema } from "./generate-single.ts";
import { generateZodSchema } from "./generate-zod.ts";

interface GenerateSchemasOptions {
  inputFiles: string[];
  filter?: string;
  outputDir: string;
}

export const generateSchemas = async (
  { inputFiles, filter, outputDir }: GenerateSchemasOptions,
): Promise<string[]> => {
  if (filter) {
    inputFiles = inputFiles.filter((file) => file.includes(filter));
  }

  const outputFilepaths: string[] = [];

  await Promise.all(inputFiles.map(async (inputFile) => {
    const data = await Deno.readTextFile(inputFile);

    const config = getFileConfig(inputFile);
    const typeName = pascalCase(config.name);

    console.log(
      `\n\n> Generating schema for ${chalk.green(typeName)} in ${
        chalk.yellow("typescript")
      }`,
    );

    const generatedCode = await generateSchema({
      json: JSON.parse(data),
      typeName,
    });

    const encoder = new TextEncoder();
    const outputFilepath = `./${outputDir}/${typeName}.ts`;

    await Deno.writeFile(
      outputFilepath,
      encoder.encode(generatedCode),
    );

    const generatedZodCode = generateZodSchema({
      sourceText: generatedCode,
      typesImportPath: `./${outputDir}/${typeName}`,
    });

    const zodOutputFilepath = `./${outputDir}/${typeName}.zod.ts`;

    await Deno.writeFile(
      zodOutputFilepath,
      encoder.encode(generatedZodCode),
    );

    console.log(
      `> Generated schema for ${chalk.green(typeName)} in ${
        chalk.yellow("typescript")
      } at ${chalk.green(outputFilepath)}`,
    );

    outputFilepaths.push(outputFilepath);
  }));

  return outputFilepaths;
};
