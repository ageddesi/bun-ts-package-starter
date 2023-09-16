import { describe, expect, it } from "bun:test";
import subtract from './subtract';

describe('Subtract', () => {
  it('should successfully subtract a number', () => {
    expect(subtract(2, 1)).toEqual(1);
  });
});