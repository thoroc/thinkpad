import chalk from 'npm:chalk';
import figlet from 'npm:figlet';

interface LoadActionOptions {
  output?: string;
}

export const loadAction = (options: LoadActionOptions, source: string) => {
  console.log(
    chalk.bold.yellow(
      figlet.textSync('Load data', { font: 'Larry 3D' }),
    ),
  );

  console.log(
    "load command called for '%s' with options: %o",
    source,
    options,
  );
};
