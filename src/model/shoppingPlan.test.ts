import { ShoppingPlan } from './shoppingPlan';
import { describe, expect, it, test } from '@jest/globals';
import { Product } from './product';

describe('Products', () => {
  it('constructor should convert cells to objects', () => {
    const products = [
      ['V', 'HMilch', 1, 5, 'Wohnzimmer', 'links', 'H-Milch (Steige)', 12],
      ['V', 'Zwieback', '', 2, 'Vorratskammer', ''],
    ];

    const actual = new ShoppingPlan(products).asMap;

    const expected = {
      HMilch: new Product(
        'HMilch',
        'V',
        1,
        5,
        'Wohnzimmer',
        'links',
        'H-Milch (Steige)',
        12
      ),
      Zwieback: new Product('Zwieback', 'V', 0, 2, 'Vorratskammer', ''),
    };
    expect(actual).toEqual(expected);
  });

  it('constructor should merge amounts', () => {
    const products = [
      ['V', 'HMilch', 1, 5, 'Wohnzimmer', 'links'],
      ['V', 'HMilch', undefined, 3],
    ];

    const actual = new ShoppingPlan(products).asMap;

    const expected = {
      HMilch: new Product('HMilch', 'V', 1, 8, 'Wohnzimmer', 'links'),
    };
    expect(actual).toEqual(expected);
  });

  it('constructor should skip unrequested marker', () => {
    const products = [
      ['', 'HMilch'],
      ['marker'],
      ['', 'Zwieback'],
      ['', 'Schokolade'],
    ];

    const actual = new ShoppingPlan(products).asMap;

    const expected = {
      HMilch: {
        key: 'HMilch',
        favorite: '',
        actualAmount: 0,
        planAmount: 0,
      },
      Zwieback: {
        key: 'Zwieback',
        favorite: '',
        actualAmount: 0,
        planAmount: 0,
      },
      Schokolade: {
        key: 'Schokolade',
        favorite: '',
        actualAmount: 0,
        planAmount: 0,
      },
    };
    expect(actual).toEqual(expected);
  });
});
