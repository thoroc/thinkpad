import {
  InputData,
  jsonInputForTargetLanguage,
  quicktype,
} from "npm:quicktype-core";

interface GenerateTypesOptions {
  json: string;
  typeName: string;
}

/**
 * Generates a TypeScript schema from a given JSON object and type name.
 *
 * @param {GenerateTypesOptions} options - The options for generating the schema.
 * @param {object} options.json - The JSON object to generate the schema from.
 * @param {string} options.typeName - The name of the TypeScript type to generate.
 * @returns {Promise<string>} A promise that resolves to the generated TypeScript schema as a string.
 */
export const generateTypes = async (
  { json, typeName }: GenerateTypesOptions,
): Promise<string> => {
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

  return lines.join("\n");
};
