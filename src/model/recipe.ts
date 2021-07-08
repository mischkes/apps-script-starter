export enum Row {
  key,
  ingredientStart = 3,
}

export class Recipe {
  readonly ingredients = new Map<string, number>();
  readonly key: string;

  constructor(row: any[]) {
    this.key = row[Row.key];
    for (let c = Row.ingredientStart; c < row.length; c += 2) {
      const ingredient = row[c + 1];
      if (ingredient) {
        const amount = row[c];
        this.ingredients.set(ingredient, amount);
      }
    }
  }
}