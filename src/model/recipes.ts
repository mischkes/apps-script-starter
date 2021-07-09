import { Recipe, Row } from './recipe';

export class Recipes {
  readonly ingredients = new Map<string, Recipe>();
  private links: Map<string, string>;

  constructor(data: any[][]) {
    Logger.log('Recipe data' + JSON.stringify(data));

    data
      .filter((row) => row[Row.key])
      .map((row) => new Recipe(row))
      .forEach((r) => this.ingredients.set(r.key, r));

    Logger.log(
      'Recipe ingredients data "Pfannkuchentorte"' +
        JSON.stringify(this.getRecipe('Pfannkuchentorte'))
    );
    this.links = new Map(data.map((row) => [row[0], row[1]]));
  }

  getRecipe(key: string) {
    return this.ingredients.get(key);
  }

  getLink(key: string) {
    return this.links.get(key);
  }
}
