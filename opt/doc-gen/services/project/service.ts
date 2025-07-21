import { TreeStructure } from './tree-structure.ts';

/**
 * ProjectServiceOptions is an interface that defines the options for the ProjectService.
 * @interface ProjectServiceOptions
 * @property {string} rootPath - The root path of the project.
 * @property {boolean} [verbose] - Whether to enable verbose output.
 * @property {string[]} [excludes] - An array of patterns to exclude from the project tree.
 */
interface ProjectServiceOptions {
  rootPath: string;
  verbose?: boolean;
  excludes?: string[]; // Exclude patterns
}

/**
 * ProjectService is a class that provides methods to interact with the project structure.
 * It can build a tree representation of the project, render it as a string, and manage
 * excluded files and directories.
 */
export class ProjectService {
  private _rootPath: string;
  private _projectName: string;
  private _verbose: boolean;
  private _treeStructure: TreeStructure;
  private _workspace: string[];

  constructor(options: ProjectServiceOptions) {
    this._rootPath = options.rootPath;
    this._projectName = this._rootPath.split('/').pop() ?? 'Project';
    this._verbose = options.verbose ?? false;
    this._treeStructure = new TreeStructure({
      rootPath: this._rootPath,
      verbose: this._verbose,
      excludes: options.excludes ?? [],
    });
    this._workspace = [];
  }

  /**
   * Get the project name
   * @returns {string} The project name
   */
  public get projectName(): string {
    return this._projectName;
  }

  /**
   * Get the root path of the project
   * @returns {string} The root path of the project
   */
  public get rootPath(): string {
    return this._rootPath;
  }

  /**
   * Get the workspace
   * @returns {string[]} The workspace
   */
  public get workspace(): string[] {
    if (this._workspace.length === 0) {
      this._workspace = this._buildWorkspace();
    }

    return this._workspace;
  }

  private _buildWorkspace = (): string[] => {
    const config = JSON.parse(Deno.readTextFileSync(
      `${this._rootPath}/deno.json`,
    ));

    return config.workspace ?? [];
  };

  /**
   * Get the project tree
   * @returns {TreeStructure} The project tree
   */
  public get treeStructure(): TreeStructure {
    return this._treeStructure;
  }

  /**
   * Render the project tree as a string
   * @returns {string} The project tree
   */
  public renderTreeStructure = (): string => {
    return this._treeStructure.renderTree();
  };
}
