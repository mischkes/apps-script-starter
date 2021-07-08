import { describe, expect, it } from '@jest/globals';
import { Meals } from './meals';
import { Recipes } from './recipes';
import { Product } from './product';

describe('Meals', () => {
  it('constructor should create a map of products', () => {
    const data = [
      ['', 'Pfannkuchentorte'],
      [1.5, 'Quarkauflauf'],
    ];
    const recipes = new Recipes([
      ['Pfannkuchentorte', '-', '-', 100, 'Mehl', 2, 'Ei', '', ''],
      ['Quarkauflauf', '-', '-', 50, 'Mehl', '', '', '', ''],
    ]);

    const actual = new Meals(data, recipes);

    const expected = new Map([
      ['Mehl', new Product('Mehl', undefined, 0, 175)],
      ['Ei', new Product('Ei', undefined, 0, 2)],
    ]);
    expect(actual.products).toEqual(expected);
  });
});
