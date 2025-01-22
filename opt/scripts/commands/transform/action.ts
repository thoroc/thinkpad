import chalk from 'npm:chalk';
import figlet from 'npm:figlet';

interface TransformActionOptions {
  output?: string;
}

export const transformAction = (
  options: TransformActionOptions,
  source: string,
) => {
  console.log(
    chalk.bold.yellow(
      figlet.textSync('Transform data', { font: 'Larry 3D' }),
    ),
  );

  console.log(
    "transform command called for '%s' with options: %o",
    source,
    options,
  );
};
