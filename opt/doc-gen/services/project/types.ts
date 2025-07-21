/**
 * TreeNode is a recursive type that represents a directory structure.
 * @interface TreeNode
 * @property {string} [key] - The name of the directory or file.
 * @property {TreeNode | string} [value] - The value can be another TreeNode (for directories) or a string (for files).
 * @example
 * ```typescript
 * // Example of a TreeNode representing a directory structure
 * const tree: TreeNode = {
 *   "src": {
 *     "index.ts": "file",
 *     "utils": {
 *       "helper.ts": "file",
 *       "constants.ts": "file"
 *     },
 *     "components": {
 *       "Button.tsx": "file",
 *       "Input.tsx": "file"
 *     }
 *   },
 * }
 * ```
 */
export interface TreeNode {
  [key: string]: TreeNode | string;
}

export const treeChars = {
  Pipe: '│   ',
  Branch: '├── ',
  LastBranch: '└── ',
  Space: '    ',
  Line: '─── ',
};

export const defaultExcludes = [
  'node_modules',
  '.git',
  '.vscode',
  'input',
  'output',
  '.gitignore',
  'lefthook.yml',
  'deno.json',
  'deno.jsonc',
  'deno.lock',
  '.markdownlint-cli2.jsonc',
  'README.md',
  '.env',
];
