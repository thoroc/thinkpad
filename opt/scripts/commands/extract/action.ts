import chalk from 'npm:chalk';
import figlet from 'npm:figlet';

interface ExtractActionOptions {
  output?: string;
}

export const extractAction = (
  options: ExtractActionOptions,
  source: string,
) => {
  console.log(
    chalk.bold.yellow(
      figlet.textSync('Extract data', { font: 'Larry 3D' }),
    ),
  );

  console.log(
    "extract command called for '%s' with options: %o",
    source,
    options,
  );
};
