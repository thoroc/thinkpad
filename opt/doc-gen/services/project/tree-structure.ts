import { colors } from 'jsr:@cliffy/ansi@1.0.0-rc.7/colors';
import { walkSync } from 'jsr:@std/fs/walk';
import { defaultExcludes, treeChars, TreeNode } from './types.ts';

interface TreeStructureOptions {
  rootPath: string;
  verbose?: boolean;
  excludes?: string[]; // Exclude patterns
  ignoreHidden?: boolean; // Whether to ignore hidden files and directories
}

/**
 * Represents a utility for building, sorting, and rendering a directory tree structure.
 *
 * The `TreeStructure` class provides methods to recursively walk a file system directory,
 * construct a tree representation of its structure, exclude specified files or directories,
 * and render the tree as a formatted string.
 *
 * @remarks
 * - Excludes can be specified to filter out files or directories from the tree.
 * - The tree is built lazily and cached for subsequent accesses.
 * - Supports verbose logging for debugging purposes.
 *
 * @example
 * ```typescript
 * const tree = new TreeStructure({ rootPath: '/my/project', excludes: ['node_modules'], verbose: true });
 * console.log(tree.renderTree());
 * ```
 *
 * @public
 */
export class TreeStructure {
  private _tree: TreeNode;
  private _excludes: string[];
  private _verbose: boolean;
  private _rootPath: string;

  constructor(options: TreeStructureOptions) {
    this._rootPath = options.rootPath;
    this._verbose = options.verbose ?? false;
    this._tree = {};
    this._excludes = [...defaultExcludes, ...options.excludes ?? []];
  }

  /**
   * Get the project tree
   * @returns {TreeNode} The project tree
   */
  public get tree(): TreeNode {
    if (Object.keys(this._tree).length === 0) {
      this._tree = this._buildTree();
    }

    return this._tree;
  }

  private _buildTree = (): TreeNode => {
    const tree: TreeNode = {};
    const skip: RegExp[] = this._excludes.map((pattern) => new RegExp(`/${pattern}/`));

    this._verbose && console.log(
      `Building project tree for ${this._rootPath} with excludes: ${
        this._excludes.map((exclude) => colors.yellow(exclude)).join(', ')
      }`,
    );

    // Walk the directory tree (ignoring hidden files if specified)
    for (
      const entry of walkSync(this._rootPath, {
        skip: [...skip, new RegExp(/^\.|\/\./)],
      })
    ) {
      const relativePath = entry.path.replace(this._rootPath, '').replace(
        /^\//,
        '',
      ); // Remove rootPath and leading slash

      if (!relativePath) continue; // Skip if the path is empty (e.g., root directory)

      const parts = relativePath.split('/'); // Split into directory and file parts

      let currentNode = tree;

      for (let i = 0; i < parts.length; i++) {
        const part = parts[i];

        if (i === parts.length - 1) {
          if (this._excludes.includes(part)) {
            continue; // Skip excluded files
          }

          // If it's the last part, determine if it's a file, directory, or symlink
          if (entry.isFile) {
            currentNode[part] = 'file';
          } else if (entry.isDirectory) {
            currentNode[part] = {};
          } else if (entry.isSymlink) {
            currentNode[part] = 'symlink';
          }
        } else {
          // Otherwise, it's a directory
          if (!currentNode[part]) {
            currentNode[part] = {};
          }
          currentNode = currentNode[part] as TreeNode;
        }
      }
    }

    return this._sortTree(tree);
  };

  private _sortTree = (node: TreeNode): TreeNode => {
    const sortedKeys = Object.keys(node).sort((a, b) => {
      if (node[a] === 'file' && node[b] !== 'file') return 1;
      if (node[a] !== 'file' && node[b] === 'file') return -1;
      return a.localeCompare(b);
    });

    const sortedNode: TreeNode = {};
    for (const key of sortedKeys) {
      if (typeof node[key] === 'object') {
        sortedNode[key] = this._sortTree(node[key] as TreeNode);
      } else {
        sortedNode[key] = node[key];
      }
    }

    return sortedNode;
  };

  /**
   * Render the project tree as a string
   * @param {TreeNode} tree - The tree to render
   * @param {string} prefix - The prefix to use for each line
   * @returns The rendered tree as a string
   */
  public renderTree = (tree?: TreeNode, prefix = ''): string => {
    const entries = Object.entries(tree ?? this.tree);
    const totalEntries = entries.length;

    return entries
      .map(([key, value], index) => {
        if (!key) {
          return '';
        }

        const isLast = index === totalEntries - 1;
        const connector = isLast ? treeChars.LastBranch : treeChars.Branch;
        const childPrefix = isLast ? treeChars.Space : treeChars.Pipe;

        if (value === 'file') {
          return `${prefix}${connector}${key}`;
        } else {
          return `${prefix}${connector}${key}\n${
            this.renderTree(
              value as TreeNode,
              prefix + childPrefix,
            )
          }`;
        }
      }).filter(Boolean) // Filter out empty strings
      .join('\n');
  };
}
