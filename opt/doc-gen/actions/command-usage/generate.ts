import { Command } from 'jsr:@cliffy/command@1.0.0-rc.7';
import { MarkdownService } from '../../services/markdown/service.ts';

/**
 * Generates the command usage section for the README file.
 *
 * This function retrieves the help information for the specified command,
 * formats it into a new section, and updates the README file accordingly.
 * The new section replaces the existing section marked with the specified
 * marker.
 *
 * @param {MarkdownService} readmeService - A service that handles the
 * manipulation of the README file, including updating sections and saving changes.
 * @param {Command} command - The command for which to generate the usage information.
 * @returns {void}
 */
export const generateCommandUsage = (
  readmeService: MarkdownService,
  command: Command,
): void => {
  const commandHelp = command.getHelp({ colors: false });
  const commandUsage = commandHelp.split('\n').map((line) => {
    return line.trimEnd();
  }).join('\n');

  const newSection = [
    '',
    '```plaintext',
    commandUsage,
    '```',
    '',
  ].join('\n');

  readmeService.updateSection(newSection, { marker: 'command-help' });

  readmeService.saveToFile();
};
