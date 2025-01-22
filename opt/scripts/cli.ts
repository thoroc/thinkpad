import { Command } from 'jsr:@cliffy/command@^1.0.0-rc.7';
import { extractCommand, loadCommand, transformCommand } from './commands/mod.ts';

await new Command()
  .command('extract', extractCommand)
  .command('transform', transformCommand)
  .command('load', loadCommand)
  .parse(Deno.args);
