import chalk from "npm:chalk";
import { pascalCase } from "npm:string-ts";
import { getFileConfig } from "../../file/config.ts";
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

  for (const inputFile of inputFiles) {
    const data = await Deno.readTextFile(inputFile);

    const config = getFileConfig(inputFile);
    const typeName = pascalCase(config.name);

    console.log(
      `\n\n> Generating types/schema for ${chalk.yellow(typeName)}\n`,
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

    console.log(
      `Generated types at ${chalk.green(outputFilepath)}`,
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
      `Generated Zod schema at ${chalk.green(`${zodOutputFilepath}`)}`,
    );

    console.log(
      `\n> Done Generating types/schema for ${chalk.yellow(typeName)}`,
    );

    outputFilepaths.push(outputFilepath);
  }

  return outputFilepaths;
};
