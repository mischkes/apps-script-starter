import { describe, expect, it } from '@jest/globals';
import { Meal } from './meal';

describe('Meal', () => {
  it('constructor should set amount to zero if missing', () => {
    const meal = new Meal('meal');

    expect(meal.multiplier).toEqual(1);
    expect(meal.recipeKey).toEqual('meal');
  });

  it('constructor should set amount if provided', () => {
    const meal = new Meal('meal', 1.5);

    expect(meal.multiplier).toEqual(1.5);
  });
});
