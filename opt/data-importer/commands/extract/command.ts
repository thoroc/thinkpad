import { Command } from 'jsr:@cliffy/command@^1.0.0-rc.8';
import { extractAction } from './action/mod.ts';

export const extractCommand = new Command()
  .alias('e')
  .arguments('<source:string>')
  .description('Extract a single xls file into a json file.')
  .option(
    '-o, --outputDir <dir:string>',
    'Output directory for extracted data.',
    {
      default: `${Deno.cwd()}/data/extracted`,
    }
  )
  .action(extractAction);
