import { Command } from 'jsr:@cliffy/command@^1.0.0-rc.7';

interface ExtractCommandOptions {
  output?: string;
}

export const extractCommand = new Command()
  .arguments('<source:string>')
  .description('Extract a single xls file into a json file.')
  .option('-o, --output <output:string>', 'Output path.')
  .action((options: ExtractCommandOptions, source: string) => {
    console.log(
      "extract command called for '%s' with options: %o",
      source,
      options,
    );
  });
