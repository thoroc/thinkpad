import {
  InputData,
  jsonInputForTargetLanguage,
  quicktype,
} from "npm:quicktype-core";

interface GenerateZodSchemasOptions {
  json: string;
  typeName: string;
}

export const generateZodSchemas = async (
  { json, typeName }: GenerateZodSchemasOptions,
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
    rendererOptions: { framework: "zod" },
  });

  console.log(
    `\n\n> Generated ${lines.length} lines of code`,
  );

  return lines.join("\n");
};
