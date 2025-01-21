import chalk from "npm:chalk";

interface WriteSourceCodeOptions {
  sourceCode: string;
  filename: string;
  dirPath: string;
}

export const writeSourceCode = async (
  { sourceCode, filename, dirPath }: WriteSourceCodeOptions,
) => {
  const encoder = new TextEncoder();
  const filepath = `${dirPath}/${filename}`;

  await Deno.writeFile(filepath, encoder.encode(sourceCode));

  console.log(
    `Generated source code at ${chalk.green(filepath)}`,
  );
};
