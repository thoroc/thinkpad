import { Command } from 'jsr:@cliffy/command@^1.0.0-rc.7';
import chalk from 'npm:chalk';
import figlet from 'npm:figlet';

interface TransformCommandOptions {
  output?: string;
}

export const transformCommand = new Command()
  .arguments('<source:string>')
  .description('Transform a raw json file into a clean data json file.')
  .option('-o, --output <output:string>', 'Output path.')
  .action((options: TransformCommandOptions, source: string) => {
    console.log(
      chalk.bold.yellow(
        figlet.textSync('Transform data', { font: 'Larry 3D' }),
      ),
    );

    console.log(
      'transform command called for %s with options: %o',
      source,
      options,
    );
  });
