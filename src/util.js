function keys(obj) {
  if (typeof obj !== 'function' && (typeof obj !== 'object' || obj === null)) {
    throw new TypeError('Object.keys called on non-object');
  }

  var result = [],
    prop,
    i;

  for (prop in obj) {
    if (hasOwnProperty.call(obj, prop)) {
      result.push(prop);
    }
  }

  return result;
}

function values(O) {
  const reduce = Function.bind.call(Function.call, Array.prototype.reduce);
  const isEnumerable = Function.bind.call(
    Function.call,
    Object.prototype.propertyIsEnumerable
  );
  const concat = Function.bind.call(Function.call, Array.prototype.concat);
  //  const keys = Reflect.ownKeys;

  return reduce(
    keys(O),
    (v, k) =>
      concat(v, typeof k === 'string' && isEnumerable(O, k) ? [O[k]] : []),
    []
  );
}

export function entries(obj) {
  var ownProps = keys(obj),
    i = ownProps.length,
    resArray = new Array(i); // preallocate the Array
  while (i--) resArray[i] = [ownProps[i], obj[ownProps[i]]];

  return resArray;
}

function limitRows(list2, rowsPerColumn) {
  var result = [];

  var r = 0;
  var c = 0;
  list2.forEach((row) => {
    result[r] = result[r] || [];
    var newRow = result[r];
    newRow[c] = row[0];
    newRow[c + 1] = row[1];

    r++;

    if (r == rowsPerColumn) {
      r = 0;
      c += 2;
    }
  });

  return result;
}
