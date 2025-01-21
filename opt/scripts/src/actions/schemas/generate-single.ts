import {
  InputData,
  jsonInputForTargetLanguage,
  quicktype,
} from "npm:quicktype-core";

interface GenerateSchemaOptions {
  json: string;
  typeName: string;
}

export const generateSchema = async (
  { json, typeName }: GenerateSchemaOptions,
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

  return lines.join("\n");
};
