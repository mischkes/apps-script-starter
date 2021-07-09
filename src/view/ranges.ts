export class Ranges {
  static meals = 'meals';
  static recipes = 'recipes';
  static productInput = 'productsInput';
  static productRepo = 'productsRepo';
  static homeLocations = 'cfgHomeLocations';

  static getRange(rangeName: string) {
    const range =
      SpreadsheetApp.getActiveSpreadsheet().getRangeByName(rangeName);
    if (!range) throw new Error('Range not found: ' + rangeName);
    return range;
  }

  static getValues(rangeName: string) {
    return Ranges.getRange(rangeName).getValues();
  }

  static setRange(rangeName: string, values: any[][]) {
    const maxWidth = Math.max(...values.map((row) => row.length));

    const value2D = [];
    for (let r = 0; r < values.length; r++) {
      value2D[r] = [];
      for (let c = 0; c < maxWidth; c++) {
        value2D[r][c] = values[r][c];
      }
    }

    Ranges.getRange(rangeName)
      .offset(0, 0, value2D.length, maxWidth)
      .setValues(value2D);
  }
}
