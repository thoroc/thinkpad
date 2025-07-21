import { Command } from 'jsr:@cliffy/command@1.0.0-rc.8';
import { generateModulesApi } from '../actions/module-api/generate.ts';
import { ModuleType } from '../types/module-type.ts';

export const generateModulesDocsCommand = new Command()
  .description('Generate api documentation')
  .alias('g')
  .type('module', new ModuleType())
  .option(
    '-n, --module-name <...module-name:module>',
    'Name of the module',
  )
  .option('-A, --all', 'Generate all modules', {
    conflicts: ['module-name'],
  })
  .option('-v, --verbose', 'Verbose output')
  .option('-f, --force', 'Force overwrite the output file')
  .action(
    (options) => {
      console.log(
        `Generating api documentation for ${options.moduleName}...`,
      );

      generateModulesApi(
        options,
      );
    },
  );
