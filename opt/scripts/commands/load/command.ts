import { Command } from 'jsr:@cliffy/command@^1.0.0-rc.7';
import chalk from 'npm:chalk';
import figlet from 'npm:figlet';

interface LoadCommandOptions {
  output?: string;
}

export const loadCommand = new Command()
  .arguments('<source:string>')
  .description('Load a transformed data file.')
  .option('-o, --output <output:string>', 'Output path.')
  .action((options: LoadCommandOptions, source: string) => {
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
  });
