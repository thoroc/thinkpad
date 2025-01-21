import { camelCase, pascalCase } from "npm:string-ts";
import { FileConfig } from "../../file/config.ts";

export const getExportStatement = (config: FileConfig, withSchema: boolean) => {
  let statement = "";

  const typeName = pascalCase(config.name);
  const schemaName = `${camelCase(config.name)}Schema`;

  statement +=
    `export type { ${typeName} } from "./${config.name}.${config.extension}";`;

  if (withSchema) {
    statement +=
      `\nexport { ${schemaName} } from "./${config.name}.zod.${config.extension}";`;
  }

  return statement;
};
