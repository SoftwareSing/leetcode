/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let ans = 0;
  for (const c of s) {
    const value = getValue(c);
    ans += value - ans % value * 2;
  }

  return ans;
};

function getValue(symbol) {
  switch (symbol) {
    case 'I':
      return 1;
    case 'V':
      return 5;
    case 'X':
      return 10;
    case 'L':
      return 50;
    case 'C':
      return 100;
    case 'D':
      return 500;
    case 'M':
      return 1000;
  }
}
