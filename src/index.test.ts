import { describe, expect, it } from '@jest/globals';
import { Product } from './index';

describe('index', () => {
  it('should export Product', () => {
    expect(Product).toBeInstanceOf(Function);
  });
});
