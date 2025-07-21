import { colors } from 'jsr:@cliffy/ansi@1.0.0-rc.8/colors';
import { Command } from 'jsr:@cliffy/command@^1.0.0-rc.8';
import figlet from 'npm:figlet';
import denoConfig from '../../deno.json' with { type: 'json' };
import { extractCommand, loadCommand, transformCommand } from './commands/mod.ts';

const appName = 'Data Importer';

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
    .action(function () {
      this.showHelp();
    })
    .command('extract', extractCommand)
    .command('transform', transformCommand)
    .command('load', loadCommand)
    .parse(Deno.args);
}
