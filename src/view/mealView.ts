import { Ranges } from './ranges';
import { Meals } from '../model/meals';
import { getRecipes } from './recipeView';

let meals: Meals;

export function getMeals() {
  meals = meals || new Meals(Ranges.getValues(Ranges.meals), getRecipes());
  return meals;
}
