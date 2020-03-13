/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
const relativeSortArray = function(arr1, arr2) {
  const a1Map = new Map();
  for (const value of arr1) {
    const count = a1Map.get(value);
    a1Map.set(value, count ? count + 1 : 1);
  }

  const result = [];
  for (const value of arr2) {
    const count = a1Map.get(value);
    if (count) {
      pushValue(result, value, count);
    }
    a1Map.delete(value);
  }
  [...a1Map.keys()]
    .sort((a, b) => {
      return a - b;
    })
    .forEach((value) => {
      const count = a1Map.get(value);
      pushValue(result, value, count);
    });

  return result;
};

function pushValue(array, value, count) {
  for (let i = 0; i < count; i += 1) {
    array.push(value);
  }

  return array;
}
