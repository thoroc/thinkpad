import { assertEquals } from 'jsr:@std/assert';
import { describe, it } from 'jsr:@std/testing/bdd';
import { PowerAdapter, toPowerAdapter } from './power-adapter.ts';

describe('toPowerAdapter', () => {
  it('should parse wattage correctly', () => {
    const input = '90W';
    const result = toPowerAdapter(input);
    assertEquals(result, { wattage: 90 } as PowerAdapter);
  });

  it('should indicate slim adapter', () => {
    const input = '65W Slim';
    const result = toPowerAdapter(input);
    assertEquals(result, { wattage: 65, slim: true } as PowerAdapter);
  });
});
