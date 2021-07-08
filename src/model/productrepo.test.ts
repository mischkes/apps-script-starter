import { describe, expect, it } from '@jest/globals';
import { ProductRepo } from './productrepo';
import { Product } from './product';

describe('ProductsRepo', () => {
  it('constructor should convert rows to product objects', () => {
    const repo = new ProductRepo([['V', 'Milch', 1, 5, '', 'rechts']]);

    const expected = [['V', 'Milch', 1, 5, '', 'rechts', undefined, undefined]];
    expect(repo.getProducts()).toEqual(expected);
  });

  it('constructor should skip empty rows', () => {
    const repo = new ProductRepo([
      ['V', 'Milch', 1, 5, '', 'rechts'],
      ['', '', '', '', '', ''],
    ]);

    const expected = [['V', 'Milch', 1, 5, '', 'rechts', undefined, undefined]];
    expect(repo.getProducts()).toEqual(expected);
  });

  it('update should update products with preference', () => {
    const repo = new ProductRepo([['', 'Milch', 1, 5, '', 'rechts']]);
    const input = new Map([
      ['Milch', new Product('Milch', '', 2, 6, 'Wohnzimmer', 'links')],
    ]);

    repo.update(input);

    const expected = [
      ['', 'Milch', 2, 6, 'Wohnzimmer', 'links', undefined, undefined],
    ];
    expect(repo.getProducts()).toEqual(expected);
  });

  it('update should update products with conversion data', () => {
    const repo = new ProductRepo([
      ['', 'Milch', 1, 5, '', 'rechts', 'Milch (Steige)', 12],
    ]);
    const input = new Map([
      ['Milch', new Product('Milch', '', 2, 6, 'Wohnzimmer', 'links')],
    ]);

    repo.update(input);

    const expected = [
      ['', 'Milch', 2, 6, 'Wohnzimmer', 'links', 'Milch (Steige)', 12],
    ];
    expect(repo.getProducts()).toEqual(expected);
  });
});