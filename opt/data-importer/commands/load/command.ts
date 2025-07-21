import { Command } from 'jsr:@cliffy/command@^1.0.0-rc.7';
import { loadAction } from './action.ts';

export const loadCommand = new Command()
  .alias('l')
  .arguments('<source:string>')
  .description('Load a transformed data file.')
  .option('-o, --output <output:string>', 'Output path.')
  .action(loadAction);
