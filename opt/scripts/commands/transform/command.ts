import { Command } from 'jsr:@cliffy/command@^1.0.0-rc.7';
import { transformAction } from './action.ts';

export const transformCommand = new Command()
  .alias('t')
  .arguments('<source:string>')
  .description('Transform a raw json file into a clean data json file.')
  .option('-o, --output <output:string>', 'Output path.')
  .action(transformAction);
