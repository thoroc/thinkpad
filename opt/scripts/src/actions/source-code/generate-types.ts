import {
  InputData,
  jsonInputForTargetLanguage,
  quicktype,
} from "npm:quicktype-core";
import { GenerateOutput } from "./types.ts";

interface GenerateTypesOptions {
  json: string;
  typeName: string;
  directory: string;
}

/**
 * Generates TypeScript types from a given JSON object and writes them to a file.
 *
 * @param {Object} options - The options for generating types.
 * @param {Object} options.json - The JSON object to generate types from.
 * @param {string} options.typeName - The name of the generated type.
 * @param {string} options.directory - The directory where the generated type file will be saved.
 *
 * @returns {Promise<GenerateOutput>} The generated source code and file path.
 *
 * @example
 * ```typescript
 * const options = {
 *   json: { ... },
 *   typeName: 'User',
 *   directory: './types'
 * };
 *
 * const output = await generateTypes(options);
 * console.log(output.sourceCode); // Generated TypeScript source code
 * console.log(output.filePath); // Path to the generated type file
 * ```
 */
export const generateTypes = async (
  { json, typeName, directory }: GenerateTypesOptions,
): Promise<GenerateOutput> => {
  const jsonInput = jsonInputForTargetLanguage("typescript");
  const samples = [JSON.stringify(json)];

  await jsonInput.addSource({
    name: typeName,
    samples,
  });

  const inputData = new InputData();
  inputData.addInput(jsonInput);

  const { lines } = await quicktype({
    inputData,
    lang: "typescript",
  });

  console.log(`Generated type for ${typeName}`);

  const encoder = new TextEncoder();
  const filePath = `${directory}/${typeName}.ts`;
  const sourceCode = lines.join("\n");

  await Deno.writeFile(filePath, encoder.encode(sourceCode));

  return { sourceCode, filePath };
};
