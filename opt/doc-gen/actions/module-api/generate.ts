import { Application } from 'npm:typedoc';
import { MarkdownService } from '../../services/markdown/service.ts';
import { ProjectService } from '../../services/project/service.ts';

/**
 * GenerateModulesDocsOptions is an interface that defines the options for generating module documentation.
 * @interface GenerateModulesDocsOptions
 * @property {string[]} [moduleName] - The names of the modules to generate documentation for.
 * @property {boolean} [all] - Whether to generate documentation for all modules.
 * @property {boolean} [verbose] - Whether to enable verbose output.
 * @property {boolean} [force] - Whether to force overwrite existing files.
 */
interface GenerateModulesDocsOptions {
  moduleName?: string[];
  all?: boolean;
  verbose?: boolean;
  force?: boolean;
}

/**
 * Generates documentation for the specified modules.
 * @param {GenerateModulesDocsOptions} options - The options for generating documentation.
 * @param {string[]} options.moduleName - The names of the modules to generate documentation for.
 * @param {boolean} options.all - Whether to generate documentation for all modules.
 * @param {boolean} options.verbose - Whether to enable verbose output.
 * @param {boolean} options.force - Whether to force overwrite existing files.
 * @returns {void}
 */
export const generateModulesApi = async (
  options: GenerateModulesDocsOptions,
): Promise<void> => {
  const { all, force, moduleName, verbose } = options;
  const projectService = new ProjectService({ rootPath: Deno.cwd() });

  const moduleNames = (all ? projectService.workspace : moduleName) ?? [];

  for (const name of moduleNames) {
    // Check if the module directory exists
    if (!Deno.statSync(name).isDirectory) {
      verbose && console.error(`Module directory ${name} does not exist.`);
      continue;
    }
    // Check if the README.md file exists
    const apiDocPath = `${Deno.cwd()}/${name}/API.md`;

    const app = await Application.bootstrapWithPlugins({
      entryPoints: [`${Deno.cwd()}/${name}/mod.ts`],
      skipErrorChecking: true,
    });
    const project = await app.convert();

    if (!project) {
      verbose && console.error(`Failed to convert project ${name}.`);
      continue;
    }
    console.log('docs', app.generateDocs(project, 'docs'));

    const apiDocContent = [
      `# ${name}`,
      '',
      '## Description',
      '',
      '## Usage',
      '',
      '## Examples',
      '',
      '## License\n',
    ].join('\n');

    // create a new README.md file under the module directory
    const mdService = new MarkdownService({
      filePath: apiDocPath,
      content: apiDocContent,
    });

    mdService.saveToFile({ override: force });
    verbose && console.log(`API.md file created in ${name}`);
  }
};
