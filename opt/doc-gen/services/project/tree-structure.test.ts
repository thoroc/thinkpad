import { assertEquals } from 'jsr:@std/assert';
import { describe, it } from 'jsr:@std/testing/bdd';
import { TreeStructure } from './tree-structure.ts';

describe('TreeStructure', () => {
  it('should initialize with default values', () => {
    const tree = new TreeStructure({ rootPath: '/test/path' });
    assertEquals(tree.tree, {});
  });

  it('should build a tree structure from the file system', () => {
    const tree = new TreeStructure({
      rootPath: '/test/path',
      excludes: ['node_modules'],
    });
    const builtTree = tree.tree;
    // Assuming the file system has a specific structure, we can check the built tree
    assertEquals(typeof builtTree, 'object');
  });

  it('should respect exclude patterns', () => {
    const tree = new TreeStructure({
      // !FIXME: Adjust the rootPath to a valid test path in your environment
      rootPath: '/test/path',
      excludes: ['node_modules'],
    });
    const builtTree = tree.tree;
    // Check that 'node_modules' is not present in the built tree
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
