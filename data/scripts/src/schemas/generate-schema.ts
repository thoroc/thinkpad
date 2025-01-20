import chalk from "npm:chalk";
import { generateZodSchemas } from "./generate-zod-schemas.ts";

interface GenerateSchemaOptions {
  inputFiles: string[];
  filter?: string;
  outputDir: string;
}

export const generateSchema = async (
  { inputFiles, filter, outputDir }: GenerateSchemaOptions,
): Promise<string[]> => {
  if (filter) {
    inputFiles = inputFiles.filter((file) => file.includes(filter));
  }

  const outputFilepaths: string[] = [];

  await Promise.all(inputFiles.map(async (inputFile) => {
    const data = await Deno.readTextFile(inputFile);
    const parts = inputFile.split("/");
    const typeName = parts[parts.length - 1].replace("_", "").split(".")[0];

    console.log(
      `\n\n> Generating schema for ${chalk.green(typeName)} in ${
        chalk.yellow("typescript")
      }`,
    );

    const generatedCode = await generateZodSchemas({
      json: JSON.parse(data),
      typeName,
    });

    const encoder = new TextEncoder();
    const outputFilepath = `./${outputDir}/${typeName}.${"ts"}`;

    await Deno.writeFile(
      outputFilepath,
      encoder.encode(generatedCode),
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
