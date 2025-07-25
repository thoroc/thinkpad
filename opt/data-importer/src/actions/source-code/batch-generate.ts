import { colors } from "jsr:@cliffy/ansi@1.0.0-rc.8/colors";
import { pascalCase } from "npm:string-ts";
import { getFileConfig } from "../../file/config.ts";
import { generateZodSchema } from "./generate-schemas.ts";
import { generateTypes } from "./generate-types.ts";

interface BatchGenerateOptions {
  inputFiles: string[];
  filter?: string;
  outputDir: string;
}

export const batchGenerate = async (
  { inputFiles, filter, outputDir }: BatchGenerateOptions,
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
      `\n\n> Generating types/schema for ${colors.yellow(typeName)}\n`,
    );

    const generatedCode = await generateTypes({
      json: JSON.parse(data),
      typeName,
      directory: outputDir,
    });

    outputFilepaths.push(generatedCode.filePath);

    const generatedZodCode = await generateZodSchema({
      sourceText: generatedCode.sourceCode,
      typesImportPath: `./${outputDir}/${typeName}`,
      directory: outputDir,
    });

    outputFilepaths.push(generatedZodCode.filePath);

    console.log(
      `\n> Done Generating types/schema for ${colors.yellow(typeName)}`,
    );
  }

  return outputFilepaths;
};
