/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let negative = 1;
  if (x < 0) {
    x *= -1
    negative = -1;
  }
  str = String(x);
  str = str.split('').reverse().join('');
  let ans = Number(str) * negative;
  return ans > 2147483647 || ans < -2147483648 ? 0 : ans;
};
