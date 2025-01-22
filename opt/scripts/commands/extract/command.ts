import { Command } from 'jsr:@cliffy/command@^1.0.0-rc.7';
import { toString } from '../utils/command-option.ts';
import { extractAction } from './action/action.ts';

const outputDirOption = toString({
  flag: {
    key: 'outputDir',
    value: 'string',
  },
  description: 'Output directory for extracted data.',
});

export const extractCommand = new Command()
  .alias('e')
  .arguments('<source:string>')
  .description('Extract a single xls file into a json file.')
  .option(outputDirOption.flag, outputDirOption.description)
  .action(extractAction);
