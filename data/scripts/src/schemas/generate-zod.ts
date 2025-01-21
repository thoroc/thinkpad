import { generate } from "npm:ts-to-zod";

interface GenerateZodSchemaOptions {
  sourceText: string;
  typesImportPath: string;
}

export const generateZodSchema = (
  { sourceText, typesImportPath }: GenerateZodSchemaOptions,
) => {
  const { getZodSchemasFile } = generate({
    sourceText,
  });

  return getZodSchemasFile(typesImportPath);
};
