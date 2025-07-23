import { assertEquals } from 'jsr:@std/assert';
import { describe, it } from 'jsr:@std/testing/bdd';
import { ExportType } from '../../types.ts';
import { getExportStatement } from './get-statement.ts';

describe('getExportStatement', () => {
  it('should return the correct export statement for exportType as type', () => {
    const result = getExportStatement({
      config: {
        name: 'test',
        extension: 'json',
        path: 'test.json',
        root: 'root',
        parentDir: 'parent',
      },
      exportType: 'type' as ExportType,
    });
    assertEquals(result, 'export type { Test } from "./test.json";');
  });
});
