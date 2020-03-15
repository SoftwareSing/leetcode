/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  const endStartCharacterMap = new Map([
    [')', '('],
    ['}', '{'],
    [']', '[']
  ]);
  const startCharacterSet = new Set(endStartCharacterMap.values())

  const list = [];

  for (const c of s) {
    if (endStartCharacterMap.has(c)) {
      const lastC = list.pop();
      if (lastC !== endStartCharacterMap.get(c)) {
        return false;
      }
    }
    else if (startCharacterSet.has(c)) {
      list.push(c);
    }
  }

  return list.length === 0;
};
