/*
 meals
 - calculate ingredients
 -- merge with existing ingredient products (marked 'R')
 -- plan --> actualAmount, comment
 -- meals --> planAmount
 -- ignore --> locations
 -- fix --> fav = 'R'

 - set new shoppingPlanData

  */

import { getMeals } from './view/mealView';

export function getMealsView() {
  return getMeals();
}

export function newShoppingPlan() {
  /*
  - use favorites or not? --> do not implement it
  --> keep List as is (upgrade - make sure every stock item is on)
  - reset 'actualAmount' to zero
   */
}

export function onEditShoppingPlan() {
  /*
  if planAmount, home, store, conversion
  - updateDB
  - setField back to lookup
  if key
  - empty? --> delete it
  - changed --> ask for rename
   */

  const locationChangedByDropdown = {
    authMode: 'LIMITED',
    value: '10000 - Speziel',
    oldValue: 'Obst und Gemüse links - Zwiebeln',
    user: { email: '', nickname: '' },
    range: { columnEnd: 6, columnStart: 6, rowEnd: 15, rowStart: 15 },
    source: {},
  };

  const multipleCellsDeleted = {
    authMode: 'LIMITED',
    user: { email: '', nickname: '' },
    range: { columnEnd: 6, columnStart: 2, rowEnd: 22, rowStart: 15 },
    source: {},
  };
}

//old values of multiple cells only when copying sheet: https://stackoverflow.com/questions/57242017/how-to-get-all-old-values-for-a-mulitple-cell-range-with-onedit-trigger
