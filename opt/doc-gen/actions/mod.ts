import { Command } from 'jsr:@cliffy/command@1.0.0-rc.7';
import { promptinatorCommand } from '../../cli/mod.ts';
import { MarkdownService } from '../services/markdown/service.ts';
import { ProjectService } from '../services/project/service.ts';
import { generateCommandUsage } from './command-usage/generate.ts';
import { generateProjectStructure } from './project-structure/generate.ts';
import { updateTableOfContent } from './table-of-content/generate.ts';

interface DocGenActionOptions {
  verbose?: boolean;
  force?: boolean;
  projectStructure?: boolean;
  commandUsage?: boolean;
  tableOfContent?: boolean;
  all?: boolean;
}

export const docGenActions = (options: DocGenActionOptions) => {
  const { verbose, force } = options;

  verbose && console.log('Verbose mode enabled');
  verbose && force && console.log('Force mode enabled');

  const readmeService = MarkdownService.fromFile('README.md');

  const rootPath = Deno.cwd();
  const projectService = new ProjectService({
    rootPath,
    verbose: options.verbose,
    excludes: ['opt'],
  });

  if (options.projectStructure || options.all) {
    verbose && console.log('Generate project structure');
    generateProjectStructure(
      projectService,
      readmeService,
    );
  }

  if (options.commandUsage || options.all) {
    verbose && console.log('Generate command usage');
    generateCommandUsage(
      readmeService,
      promptinatorCommand as unknown as Command,
    );
  }

  if (options.tableOfContent || options.all) {
    verbose && console.log('Generate table of content');
    updateTableOfContent(
      readmeService,
    );
  }
};
