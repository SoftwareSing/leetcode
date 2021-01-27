/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let lastWordEnd = s.length - 1;
  for (lastWordEnd; lastWordEnd >= 0; lastWordEnd -= 1) {
    if (s[lastWordEnd] !== ' ') {
      break;
    }
  }
  if (lastWordEnd < 0) {
    return 0;
  }

  for (let i = lastWordEnd - 1; i >= 0; i -= 1) {
    if (s[i] === ' ') {
      return lastWordEnd - i;
    }
  }
  return lastWordEnd + 1;
};
