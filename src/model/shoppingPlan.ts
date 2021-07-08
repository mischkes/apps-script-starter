import { Product } from './product';
import fromEntries from 'object.fromentries';

export class ShoppingPlan {
  private readonly products = new Map<string, Product>();

  constructor(range: Array<Array<any>>) {
    if (range) {
      this.loadProducts(range);
    }
  }

  private loadProducts(values: Array<Array<any>>) {
    values
      .map((row) => this.newProduct(row))
      .filter((product) => product.key)
      .forEach((product) => this.add(product));

    return this;
  }

  private newProduct(row: Array<any>): Product {
    //['V', 'H-Milch', 1, 5, 'Wohnzimmer', 'links', 'H-Milch (Steige)', 12],
    //
    return new Product(
      row[1],
      row[0],
      row[2],
      row[3],
      row[4],
      row[5],
      row[6],
      row[7]
    );
  }

  private add(product: Product): ShoppingPlan {
    const existing = this.products.get(product.key);
    const add = Product.mergeAndAddAmounts(product, existing);

    this.products.set(product.key, add);
    return this;
  }

  get asMap() {
    return fromEntries(this.products);
  }
}
