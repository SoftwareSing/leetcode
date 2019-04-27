/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
    return false;
  }
  if (x % 10 === 0 && x !== 0) {
    return false;
  }

  let reverseNumber = 0;
  let n = x;
  while (n > 0) {
    reverseNumber = reverseNumber * 10 + n % 10;
    n = Math.floor(n / 10);
  }

  return reverseNumber === x;
};
