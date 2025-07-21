import { Command } from 'jsr:@cliffy/command@^1.0.0-rc.7';
import { toString } from '../utils/mod.ts';
import { transformAction } from './action/action.ts';

const outputDirOption = toString({
  flag: {
    key: 'outputDir',
    value: 'string',
  },
  description: 'Output directory for transfomed data.',
});

export const transformCommand = new Command()
  .alias('t')
  .arguments('<source:string>')
  .description('Transform a raw json file into a clean data json file.')
  .option(outputDirOption.flag, outputDirOption.description)
  .action(transformAction);
