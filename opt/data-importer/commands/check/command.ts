import { Command } from 'jsr:@cliffy/command@1.0.0-rc.8';
import { checkDataShapeAction } from './action/mod.ts';
import { OutputType, TransformerFixturesType } from './action/types.ts';

export const checkDataShapeCommand = new Command()
  .name('check-data-shape')
  .alias('c')
  .description('Check the shape of data in extracted JSON files')
  .type('fixtures', new TransformerFixturesType())
  .option(
    '-i, --input-path <inputPath:string>',
    'Path to the directory containing JSON files',
    {
      default: `${Deno.cwd()}/data/extracted`,
    }
  )
  .option(
    '-s, --selected-properties <selectedProperties:string>',
    'The properties to output',
    {
      collect: true,
    }
  )
  .option('-l, --list', 'List all property names')
  .option('-g, --grouped', 'Group the properties', {
    depends: ['selected-properties'],
    default: false,
  })
  .option(
    '-c, --check-test-data <checkTestData:fixtures>',
    'Check the test data shape',
    {
      required: false,
    }
  )
  .option(
    '-o, --output-type <outputType:string>',
    'Output type: json, table, raw',
    {
      default: OutputType.RAW,
    }
  )
  .option('-d, --detailed', 'Output detailed information', {
    default: false,
    conflicts: ['list'],
  })
  .action(checkDataShapeAction);
