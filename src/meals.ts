import { Recipes } from './recipes';
import { Product } from './product';
import { Meal } from './meal';

enum Row {
  multiplier,
  key,
}

export class Meals {
  readonly products = new Map<string, Product>();

  constructor(data: any[][], readonly recipes: Recipes) {
    data = data
      .flatMap((row) => [
        [row[0], row[1]],
        [row[2], row[3]],
        [row[4], row[5]],
      ])
      .filter((row) => row[1]);

    data
      .map((row) => new Meal(row[Row.key], row[Row.multiplier]))
      .flatMap((meal) => this.toProducts(meal))
      .forEach((product) => this.mergeProduct(product));
  }

  private mergeProduct(product: Product) {
    const existing = this.products.get(product.key);
    this.products.set(
      product.key,
      Product.mergeAndAddAmounts(product, existing)
    );
  }

  toProducts(meal: Meal) {
    const recipe = this.recipes.getRecipe(meal.recipeKey);
    if (!recipe) {
      return [];
    }
    return [...recipe.ingredients.entries()].map(
      ([product, amount]) =>
        new Product(product, undefined, undefined, amount * meal.multiplier)
    );
  }
}
