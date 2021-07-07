/**
 * Some description
 */
import sl from '../dist/bundle';
import { Product } from '../product';

function productIntegrationTest() {
//  return JSON.stringify(new sl.Product('hello product'));
  Logger.log(new sl.Product('hello product'));
  return JSON.stringify(new sl.Product('hello product'));
}

