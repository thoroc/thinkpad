import { Command } from 'jsr:@cliffy/command@^1.0.0-rc.7';
import { extractAction } from './action.ts';

export const extractCommand = new Command()
  .alias('e')
  .arguments('<source:string>')
  .description('Extract a single xls file into a json file.')
  .option('-o, --output <output:string>', 'Output path.')
  .action(extractAction);
