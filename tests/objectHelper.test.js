import { getOnlyFilled, parseNested } from '@/helpers/objectHelper';
import { describe, expect, it } from 'vitest';

describe('getOnlyFilled', () => {
  it('should return the same value for non-object input', () => {
    const input = 42;
    expect(getOnlyFilled(input)).toBe(input);
  });

  it('should handle circular references', () => {
    const obj = {};
    obj.self = obj;
    const expected = {};
    expect(getOnlyFilled(obj)).toEqual(expected);
  });

  it('should handle arrays with circular references', () => {
    const arr = [];
    arr.push(arr);
    const expected = [];
    expect(getOnlyFilled(arr)).toEqual(expected);
  });
});

describe('parseNested', () => {
  it('should return the input string if it is not a valid JSON', () => {
    const input = 'invalid json';
    expect(parseNested(input)).toBe(input);
  });

  it('should parse nested objects correctly', () => {
    const input = '{"a":{"b":{"c":1}}}';
    const expected = { a: { b: { c: 1 } } };
    expect(parseNested(input)).toEqual(expected);
  });

  it('should parse nested arrays correctly', () => {
    const input = '{"a":[1,{"b":[2,3]}]}';
    const expected = { a: [1, { b: [2, 3] }] };
    expect(parseNested(input)).toEqual(expected);
  });
});
