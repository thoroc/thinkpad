import chalk from "npm:chalk";
import { ExcelFileExtension } from "../types.ts";

interface RenameFileOptions {
  file: Deno.DirEntry;
  fileExtension: ExcelFileExtension;
}

export const renameFile = async (
  { file, fileExtension }: RenameFileOptions,
): Promise<string | void> => {
  // only get the last part of the file name as extension
  const extension = file.name.split(".").findLast(() => true);

  if (file.isFile && extension === fileExtension) {
    const parts = file.name.split(" ");

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
