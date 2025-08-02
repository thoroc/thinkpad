import { ImportTypes } from 'jsr:@psych/sheet';
import { getFileConfig } from '../../utils/mod.ts';
import { extractFile } from './file.ts';
import { ExtractOptions } from './types.ts';

/**
 * Extracts and processes files from a specified directory based on supported import file extensions.
 *
 * Reads all files in the given `sourcePath`, filters them by supported extensions (e.g., XLS, XLSX),
 * and processes each file using the `extractFile` function. The output directory for each file can be
 * specified via `options.outputDir` or determined from the file's configuration. Supports a `force` option
 * to control extraction behavior.
 *
 * @param sourcePath - The path to the directory containing files to extract.
 * @param options - Extraction options, including output directory and force flag.
 * @returns A promise that resolves when all eligible files have been processed.
 * @throws Will log and rethrow any errors encountered during extraction.
 */
export const extractDirectory = async (
  sourcePath: string,
  options: ExtractOptions
): Promise<void> => {
  try {
    const files = Deno.readDirSync(sourcePath);
    const orderedFiles = Array.from(files).sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    const importFileExtensions = [ImportTypes.XLS, ImportTypes.XLSX];

    const filteredFiles = orderedFiles.filter((file) =>
      importFileExtensions.some((ext) => file.name.endsWith(ext))
    );

    for (const file of filteredFiles) {
      const filepath = `${sourcePath}/${file.name}`;
      const fileConfig = getFileConfig(filepath);
      const outputDir = options.outputDir || fileConfig.path;

      await extractFile(filepath, { outputDir, force: options.force });
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
