import { getFileConfig } from '../../utils/mod.ts';
import { extractFile } from './file.ts';
import { ExtractOptions } from './types.ts';

export const extractDirectory = async (
  sourcePath: string,
  options: ExtractOptions,
): Promise<void> => {
  try {
    const files = Deno.readDirSync(sourcePath);
    const orderedFiles = Array.from(files).sort((a, b) => a.name.localeCompare(b.name));

    const filteredFiles = orderedFiles.filter((file) =>
      file.name.endsWith('.xls') || file.name.endsWith('.xlsx')
    );

    for (const file of filteredFiles) {
      const filepath = `${sourcePath}/${file.name}`;
      const fileConfig = getFileConfig(filepath);
      const outputDir = options.outputDir || fileConfig.path;
      const fileExtension = options.fileExtension || 'json';

      await extractFile(filepath, { outputDir, fileExtension });
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
