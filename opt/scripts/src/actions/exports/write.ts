import { getFileConfig } from "../../file/config.ts";
import { ExportOptions } from "../../types.ts";
import { getExportStatement } from "./get-statement.ts";

interface WriteExportsOptions {
  outputDir: string;
  files: ExportOptions[];
}

/**
 * Writes export statements to a specified output directory.
 *
 * @param {WriteExportsOptions} options - The options for writing exports.
 * @param {string} options.outputDir - The directory where the exports will be written.
 * @param {Array<{ filePath: string, exportType: string }>} options.files - The list of files to generate export statements for.
 *
 * @returns {void}
 *
 * @example
 * writeExports({
 *   outputDir: './dist',
 *   files: [
 *     { filePath: './src/foo.ts', exportType: 'default' },
 *     { filePath: './src/bar.ts', exportType: 'named' }
 *   ]
 * });
 */
export const writeExports = (
  { outputDir, files }: WriteExportsOptions,
): void => {
  console.log(`\n\n> Writing ${files.length} exports to ${outputDir}/mod.ts`);

  const content = files.map((file) => {
    const config = getFileConfig(file.filePath);

    return getExportStatement({ config, exportType: file.exportType });
  });

  console.debug(`<<\n${content.join("\n")}\n>>`);

  console.log(`\n\n> Writing ${content.length} exports to ${outputDir}/mod.ts`);

  const encoder = new TextEncoder();
  const outputFilepath = `${outputDir}/mod.ts`;

  Deno.writeFileSync(
    outputFilepath,
    encoder.encode(content.join("\n")),
  );
};
