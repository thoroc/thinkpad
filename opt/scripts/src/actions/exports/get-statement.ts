import { camelCase, pascalCase } from "npm:string-ts";
import { FileConfig } from "../../file/config.ts";
import { ExportType } from "../../types.ts";

interface GetExportStatementOptions {
  config: FileConfig;
  exportType: ExportType;
}

/**
 * Generates an export statement string based on the provided configuration and export type.
 *
 * @param {Object} options - The options for generating the export statement.
 * @param {FileConfig} options.config - The configuration object containing the name and extension.
 * @param {ExportType} options.exportType - The type of export statement to generate. Can be "type" or "schema".
 * @returns {string} The generated export statement string.
 */
export const getExportStatement = (
  { config, exportType }: GetExportStatementOptions,
): string => {
  const typeName = pascalCase(config.name);
  const schemaName = `${camelCase(config.name)}Schema`;

  switch (exportType) {
    case "type":
    default:
      return `export type { ${typeName} } from "./${config.name}.${config.extension}";`;

    case "schema":
      return `export { ${schemaName} } from "./${config.name}.zod.${config.extension}";`;
  }
};
