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
    const count = a1Map.get(value) || 0;
    result.push(...(new Array(count)).fill(value));
    a1Map.delete(value);
  }
  [...a1Map.keys()]
    .sort((a, b) => {
      return a - b;
    })
    .forEach((value) => {
      const count = a1Map.get(value);
      result.push(...(new Array(count)).fill(value));
    });

  return result;
};
