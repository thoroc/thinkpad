import { extractFile } from './file.ts';

interface ExtractDirectoryOptions {
  outputDir?: string;
  fileExtension?: string;
}

export const extractDirectory = async (
  sourcePath: string,
  options: ExtractDirectoryOptions,
): Promise<void> => {
  try {
    const files = Deno.readDirSync(sourcePath);
    const orderedFiles = Array.from(files).sort((a, b) => a.name.localeCompare(b.name));

    for (const file of orderedFiles) {
      const filepath = `${sourcePath}/${file.name}`;

      await extractFile(filepath, options);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
