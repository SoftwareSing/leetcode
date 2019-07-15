/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (typeof strs[0] !== 'string') {
    return '';
  }

  let count = 0;
  run: for (let i = 0; i < strs[0].length; i += 1) {
    const text = strs[0][i];
    for (const str of strs) {
      if (str[i] !== text) {
        break run;
      }
    }
    count += 1;
  }

  return strs[0].slice(0, count);
};
