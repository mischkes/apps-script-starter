export class Meal {
  readonly multiplier: number;

  constructor(readonly recipeKey: string, multiplier?: number) {
    this.multiplier = multiplier || 1;
  }
}
