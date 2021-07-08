import { Product } from './product';
import { describe, expect, it, test } from '@jest/globals';

describe('Product', () => {
  it('Merge with other should remove udnefineds and zeros', () => {
    const to = new Product('key', 'V', undefined, 0, 'home');
    const from = new Product(
      'key',
      undefined,
      0,
      2,
      'homeNew',
      undefined,
      'convert',
      0
    );

    const actual = to.merge(from);

    const expected = new Product(
      'key',
      'V',
      0,
      0,
      'home',
      undefined,
      'convert',
      0
    );
    expect(actual).toEqual(expected);
  });

  it('Merge with undefined should return clone of original', () => {
    const expected = new Product('key', 'V');

    const actual = expected.merge(undefined);

    expect(actual).toEqual(expected);
  });

  test.each([
    [true, 'V'],
    [false, 'P'],
  ])(
    'isStockItem should return %s when favorite is %s',
    (expected, favorite) => {
      const p = new Product('key', favorite);

      expect(p.isStockItem()).toEqual(expected);
    }
  );
});
