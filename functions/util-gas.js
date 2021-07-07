//import { SpreadsheetApp, Logger } from 'google-apps-script';

function getRange(rangeName) {
  let range = SpreadsheetApp.getActiveSpreadsheet().getRangeByName(rangeName);
  Logger.log('Range ' + rangeName + ': ' + JSON.stringify(range.getValues()));
  if (!range) throw new Error('Range not found: ' + rangeName);
  return range;
}

function getValues(rangeName) {
  return getRange(rangeName).getValues();
}

function setRange(rangeName, values) {
  let maxWidth = Math.max(...values.map((row) => row.length));

  let value2D = [];
  for (let r = 0; r < values.length; r++) {
    value2D[r] = [];
    for (let c = 0; c < maxWidth; c++) {
      value2D[r][c] = values[r][c];
    }
  }

  getRange(rangeName).offset(0, 0, value2D.length, maxWidth).setValues(value2D);
}

