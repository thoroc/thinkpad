import { pascalCase } from "npm:string-ts";
import { generate } from "npm:ts-to-zod";
import { getFileConfig } from "../../file/config.ts";
import { GenerateOutput } from "./types.ts";

interface GenerateZodSchemaOptions {
  sourceText: string;
  typesImportPath: string;
  directory: string;
}

/**
 * Generates a Zod schema from the provided source text and writes it to a file.
 *
 * @param {Object} options - The options for generating the Zod schema.
 * @param {string} options.sourceText - The source text to generate the schema from.
 * @param {string} options.typesImportPath - The import path for the types.
 * @param {string} options.directory - The directory to write the generated schema file to.
 *
 * @returns {Promise<GenerateOutput>} The generated source code and file path.
 *
 * @example
 * ```typescript
 * const options = {
 *   sourceText: '...',
 *   typesImportPath: './types',
 *   directory: './schemas'
 * };
 *
 * const output = await generateZodSchema(options);
 * console.log(output.sourceCode); // Generated Zod schema source code
 * console.log(output.filePath); // Path to the generated schema file
 * ```
 */
export const generateZodSchema = async (
  { sourceText, typesImportPath, directory }: GenerateZodSchemaOptions,
): Promise<GenerateOutput> => {
  const { getZodSchemasFile } = generate({
    sourceText,
  });

  const sourceCode = getZodSchemasFile(typesImportPath);

  const config = getFileConfig(`${typesImportPath}.ts`);

  // this is for the deno runtime
  const denoCompatibleCode = sourceCode
    .replace('import { z } from "zod";', 'import { z } from "npm:zod";')
    .replace(typesImportPath, `../${config.parentDir}/${config.name}.ts`);

  console.log(`Generated Zod schema for ${config.name}`);

  const encoder = new TextEncoder();
  const filePath = `${directory}/${pascalCase(config.name)}.zod.ts`;

  await Deno.writeFile(filePath, encoder.encode(denoCompatibleCode));

  return { sourceCode: denoCompatibleCode, filePath };
};
