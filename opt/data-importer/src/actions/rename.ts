import chalk from 'npm:chalk';
import { ExcelFileExtension } from '../types.ts';

interface RenameFileOptions {
  file: Deno.DirEntry;
  fileExtension: ExcelFileExtension;
}

/**
 * Renames a file in the `data/imports/` directory by removing spaces from its name,
 * keeping only the first part before any spaces, and ensuring the file has the specified extension.
 *
 * If the file is already in the correct format (no spaces in the name), the function skips renaming.
 * If the file is not a file or does not have the specified extension, the function also skips renaming.
 *
 * @param options - An object containing the file to rename and the required file extension.
 * @param options.file - The file object to be renamed. Must have `name` and `isFile` properties.
 * @param options.fileExtension - The required file extension (without the dot).
 * @returns The new file name if renamed, the original file name if skipped due to correct format, or void if not applicable.
 */
export const renameFile = async (
  { file, fileExtension }: RenameFileOptions,
): Promise<string | void> => {
  // only get the last part of the file name as extension
  const extension = file.name.split('.').findLast(() => true);

  if (file.isFile && extension === fileExtension) {
    const parts = file.name.split(' ');

    console.log(`Renaming ${chalk.green(file.name)}`);

    if (parts.length === 1) {
      console.log(
        `Skipping ${chalk.cyan(file.name)}: File already in the correct format`,
      );
      return file.name;
    }

    const fileName = parts[0];

    await Deno.rename(
      `data/imports/${file.name}`,
      `data/imports/${fileName}.${extension}`,
    );

    console.log(`Renamed ${file.name} to ${fileName}.${extension}`);

    return `${file.name}.${extension}`;
  }

  console.log(
    `Skipping ${chalk.cyan(file.name)}: either not a file or not a ${
      chalk.cyan(fileExtension)
    } file`,
  );
};
