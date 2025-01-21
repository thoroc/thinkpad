import { generate } from "npm:ts-to-zod";
import { getFileConfig } from "../../file/config.ts";

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

  const code = getZodSchemasFile(typesImportPath);

  const config = getFileConfig(`${typesImportPath}.ts`);

  // this is for the deno runtime
  const denoCompatibleCode = code
    .replace('import { z } from "zod";', 'import { z } from "npm:zod";')
    .replace(typesImportPath, `../${config.parentDir}/${config.name}.ts`);

  console.log(`Generated Zod schema for ${config.name}`);

  return denoCompatibleCode;
};
