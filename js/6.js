/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  const lines = [];
  for (let i = 0; i < numRows; i += 1) {
    lines.push('');
  }
  for (let i = 0, line = 0, upFlag = false; i < s.length; i += 1) {
    lines[line] += s[i]
    if (numRows > 1) {
      switch (line) {
        case (numRows - 1):
          upFlag = true;
          break;
        case 0:
          upFlag = false;
          break;
        default:
          break;
      }
      line += upFlag ? -1 : 1;
    }
  }
  return lines.reduce((ans, line) => {
    return ans + line;
  }, '');
};
