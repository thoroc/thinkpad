#!/usr/bin/env -S deno run --allow-env --allow-read --allow-write --allow-run --allow-net
import { colors } from 'jsr:@cliffy/ansi@1.0.0-rc.8/colors';
import { Command } from 'jsr:@cliffy/command@1.0.0-rc.8';
import figlet from 'npm:figlet';
import denoConfig from '../../deno.json' with { type: 'json' };
import { docGenActions } from './actions/mod.ts';
import { generateModulesDocsCommand } from './commands/generate-docs.ts';

export const appName = 'DocGen';

if (import.meta.main) {
  const version = (denoConfig as { version?: string }).version || '0.0.0';
  const banner = figlet.textSync(appName, {
    font: 'Slant',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    whitespaceBreak: true,
  });
  console.log(colors.cyan(banner));
  await new Command()
    .name(appName)
    .description(`${appName} CLI`)
    .version(version)
    .option('-v, --verbose', 'Verbose output')
    .option('-f, --force', 'Force overwrite the output file')
    .option('-S, --project-structure', 'Update project structure')
    .option('-U, --command-usage', 'Update command usage')
    .option('-T, --table-of-content', 'Update table of content')
    .option('-A, --all', 'Update all sections', {
      conflicts: ['project-structure', 'command-usage', 'table-of-content'],
    })
    .action(function () {
      this.showHelp();
    })
    .action(docGenActions)
    .command('generate', generateModulesDocsCommand)
    .parse(Deno.args);
}
