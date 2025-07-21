import { MarkdownService } from '../../services/markdown/service.ts';
import { ProjectService } from '../../services/project/service.ts';

/**
 * Generates the project structure and updates the README file.
 *
 * This function retrieves the current project structure as a tree,
 * renders it into a string, and formats it into a new section. The
 * new section is then inserted into the README file, replacing the
 * existing section marked with the specified marker.
 *
 * @param {ProjectService} projectService - A service that provides access to the project's
 * structure and metadata, such as the project name and tree representation.
 * @param {MarkdownService} readmeService - A service that handles the
 * manipulation of the README file, including updating sections and saving changes.
 */
export const generateProjectStructure = (
  projectService: ProjectService,
  readmeService: MarkdownService,
): void => {
  const treeStructure = projectService.renderTreeStructure();

  const newSection = [
    '',
    '```plaintext',
    projectService.projectName,
    treeStructure,
    '```',
    '',
  ].join('\n');

  readmeService.updateSection(newSection, { marker: 'project-structure' });

  readmeService.saveToFile();
};
