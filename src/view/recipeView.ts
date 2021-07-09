import { Recipes } from '../model/recipes';
import { Ranges } from './ranges';

let recipes: Recipes;

export function getRecipes() {
  recipes = recipes || new Recipes(Ranges.getValues(Ranges.recipes));
  return recipes;
}
