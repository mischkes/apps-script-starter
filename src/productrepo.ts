import { Product } from './product';

enum Row {
  fav,
  key,
  actual,
  plan,
  home,
  store,
  convertTo,
  convertFactor,
}

export class ProductRepo {
  private readonly products: Map<string, Product>;

  //["V", "H-Milch", 1, 5, "", "rechts", "H-Milch (Steige)", 12]

  constructor(data: any[][]) {
    this.products = new Map(
      data
        .map(this.asProduct)
        .filter((p) => p.key)
        .map((product) => [product.key, product])
    );
  }

  private asProduct(row: any[]): Product {
    return new Product(
      row[Row.key],
      row[Row.fav],
      row[Row.actual],
      row[Row.plan],
      row[Row.home],
      row[Row.store],
      row[Row.convertTo],
      row[Row.convertFactor]
    );
  }

  private asRow(product: Product): any[] {
    const row = [];
    row[Row.key] = product.key;
    row[Row.fav] = product.favorite;
    row[Row.actual] = product.actualAmount;
    row[Row.plan] = product.planAmount;
    row[Row.home] = product.homeLocation;
    row[Row.store] = product.storeLocation;
    row[Row.convertTo] = product.convertTo;
    row[Row.convertFactor] = product.convertFactor;

    return row;
  }

  getProduct(key: string): Product {
    return this.products.get(key);
  }

  getProducts(): any[][] {
    return [...this.products.values()].map(this.asRow);
  }

  update(inputProducts: Map<string, Product>) {
    [...inputProducts.values()]
      .map((product) => product.merge(this.products.get(product.key)))
      .forEach((product) => this.products.set(product.key, product));
  }
}
