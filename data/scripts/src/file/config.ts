export type FileConfig = {
  name: string;
  extension: string;
  path: string;
  root: string;
  parentDir: string;
};

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
