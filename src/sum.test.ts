import { describe, expect, it } from "bun:test";
import sum from './sum';

describe('Sum', () => {
  it('should successfully add a number', () => {
    expect(sum(2, 1)).toEqual(3);
  });
});