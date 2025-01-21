export type FileConfig = {
  name: string;
  extension: string;
  path: string;
  root: string;
  parentDir: string;
};

/**
 * Extracts and returns the configuration details of a file from its filepath.
 *
 * @param filepath - The full path of the file.
 * @returns An object containing the file's configuration details:
 * - `extension`: The file extension.
 * - `name`: The name of the file without the extension. Excludes any values after a period.
 * - `path`: The directory path of the file. Excludes the filename.
 * - `root`: The root directory of the file path.
 * - `parentDir`: The parent directory of the file.
 */
export const getFileConfig = (filepath: string): FileConfig => {
  const pathParts = filepath.split("/");
  const nameParts = (pathParts.pop() as string).split(".");
  const extension = nameParts.pop() as string;
  const name = nameParts.reverse().pop() as string;
  const root = pathParts[0] as string;
  const path = pathParts.join("/") as string;
  const parentDir = pathParts.pop() as string;

  return {
    extension,
    name,
    path,
    root,
    parentDir,
  };
};
