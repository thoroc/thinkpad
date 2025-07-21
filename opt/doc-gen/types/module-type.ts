import { type ArgumentValue, Type, ValidationError } from 'jsr:@cliffy/command@1.0.0-rc.8';
import { ProjectService } from '../services/project/service.ts';

/**
 * Custom type for module names.
 * This type is used to validate and parse module names
 * provided as command-line arguments.
 * It retrieves the available module names from the project
 * configuration and checks if the provided module name
 * is valid.
 */
export class ModuleType extends Type<string> {
  private _modules: string[] | null = null;

  constructor() {
    super();
  }

  private get modules(): string[] {
    if (this._modules === null) {
      this._modules = this._getProject();
    }
    return this._modules;
  }

  public override values(): string[] {
    return this.modules;
  }

  public parse({ value }: ArgumentValue): string {
    if (this.modules && !this.modules.includes(value)) {
      throw new ValidationError(
        `Invalid module name. Available modules are: ${this.modules.join(', ')}`,
      );
    }
    return value;
  }

  private _getProject(): string[] {
    try {
      // Get the config from the config service
      const projectService = new ProjectService({
        rootPath: Deno.cwd(),
        verbose: false,
        excludes: [],
      });

      return projectService.workspace.map((module) => {
        const parts = module.split('/');
        const moduleName = parts[parts.length - 1];
        return moduleName;
      });
    } catch (error) {
      throw new Error(
        `Failed to load workspace. Ensure the configuration file exists and is valid. Error: ${error}`,
      );
    }
  }
}
