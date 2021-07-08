/* Written by Sebastian Mischke */
import { entries } from './util.js';

export class Product {
  readonly actualAmount: number;
  readonly planAmount: number;
  constructor(
    readonly key: string,
    readonly favorite?: string,
    actualAmount?: number,
    planAmount?: number,
    readonly homeLocation?: string,
    readonly storeLocation?: string,
    readonly convertTo?: string,
    readonly convertFactor?: number
  ) {
    this.actualAmount = actualAmount || 0;
    this.planAmount = planAmount || 0;
  }

  merge(other: Product): Product {
    const merged: Product = new Product(this.key);
    entries(other || {})
      .concat(entries(this))
      .filter(([key, value]) => value !== undefined)
      .forEach(([key, value]) => ((<any>merged)[key] = value));

    //  (<any>merged).actualAmount = this.actualAmount + other.actualAmount;
    return merged;
  }

  isStockItem() {
    return this.favorite == 'V';
  }

  //TODO: move test
  static mergeAndAddAmounts(first: Product, second: Product) {
    if (first && second) {
      return new Product(
        undefined,
        undefined,
        first.actualAmount + second.actualAmount,
        first.planAmount + second.planAmount
      )
        .merge(first)
        .merge(second);
    } else {
      return first || second;
    }
  }
}
