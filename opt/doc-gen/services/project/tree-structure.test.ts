import { assertEquals } from 'jsr:@std/assert';
import { afterEach, beforeEach, describe, it } from 'jsr:@std/testing/bdd';
import { TreeStructure } from './tree-structure.ts';

describe('TreeStructure', () => {
  let rootPath: string;

  beforeEach(() => {
    rootPath = Deno.makeTempDirSync({ prefix: 'tree-structure-root-test' });

    // Create a sample directory structure for testing
    Deno.mkdirSync(`${rootPath}/dir1`);
    Deno.mkdirSync(`${rootPath}/dir2`);
    Deno.writeTextFileSync(`${rootPath}/dir1/file1.txt`, 'Content of file1');
    Deno.writeTextFileSync(`${rootPath}/dir2/file2.txt`, 'Content of file2');
    Deno.mkdirSync(`${rootPath}/node_modules`);
    Deno.writeTextFileSync(
      `${rootPath}/node_modules/file3.txt`,
      'Content of file3',
    );
    Deno.mkdirSync(`${rootPath}/.git`);
    Deno.writeTextFileSync(`${rootPath}/.git/file4.txt`, 'Content of file4');
    Deno.mkdirSync(`${rootPath}/.vscode`);
    Deno.writeTextFileSync(`${rootPath}/.vscode/settings.json`, '{}');
    Deno.mkdirSync(`${rootPath}/.idea`);
    Deno.writeTextFileSync(
      `${rootPath}/.idea/workspace.xml`,
      '<workspace></workspace>',
    );
    Deno.mkdirSync(`${rootPath}/.cache`);
    Deno.writeTextFileSync(`${rootPath}/.cache/cache.txt`, 'Cache content');
    Deno.mkdirSync(`${rootPath}/.temp`);
    Deno.writeTextFileSync(`${rootPath}/.temp/temp.txt`, 'Temporary content');
    Deno.mkdirSync(`${rootPath}/.logs`);
    Deno.writeTextFileSync(`${rootPath}/.logs/log.txt`, 'Log content');
  });

  afterEach(() => {
    Deno.removeSync(rootPath, { recursive: true });
  });

  it('should initialize with default values', () => {
    // Act
    const tree = new TreeStructure({ rootPath });

    // Assert
    assertEquals(tree.tree, {
      dir1: {
        'file1.txt': 'file',
      },
      dir2: {
        'file2.txt': 'file',
      },
    });
  });

  it('should build a tree structure from the file system', () => {
    // Act
    const tree = new TreeStructure({
      rootPath,
      excludes: ['node_modules'],
    });
    const builtTree = tree.tree;

    // Assert
    assertEquals(typeof builtTree, 'object');
  });

  it('should respect exclude patterns', () => {
    // Act
    const tree = new TreeStructure({
      rootPath,
      excludes: ['node_modules'],
    });
    const builtTree = tree.tree;

    // Assert
    assertEquals(builtTree['node_modules'], undefined);
  });

  // it("should log verbose messages when verbose mode is enabled", () => {
  //   const consoleSpy = spyOn(console, "log");
  //   const tree = new TreeStructure({ rootPath: "/test/path", verbose: true });

  //   // Trigger some operation that would log a message
  //   tree.tree; // This should trigger the build and log if verbose is true

  //   assertEquals(consoleSpy.calls.length > 0, true);
  // });
});
