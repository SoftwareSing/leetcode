/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let substring = ''
  let maxLength = 0;
  for (let i = 0; i < s.length; i += 1) {
    const c = s[i];
    const index = substring.indexOf(c);
    if (index > -1) {
      maxLength = Math.max(substring.length, maxLength);
      substring = substring.slice(index + 1);
    }
    substring += c;
  }
  maxLength = Math.max(substring.length, maxLength);

  return maxLength;
};
