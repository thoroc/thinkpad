import chalk from 'npm:chalk';
import figlet from 'npm:figlet';
import { transformFile } from './file.ts';
import { TransformOptions } from './types.ts';

export const transformAction = async (
  options: TransformOptions,
  source: string,
) => {
  console.log(
    "transform command called for '%s' with options: %o",
    source,
    options,
  );
  console.log(
    chalk.bold.yellow(
      figlet.textSync('Transform data', { font: 'Larry 3D' }),
    ),
  );

  const stat = await Deno.stat(source);

  if (stat.isDirectory) {
    console.log(chalk.red('Directory transformation is not supported yet.'));
  } else {
    await transformFile(source, options);
  }
};
