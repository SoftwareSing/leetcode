/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function(s) {
  if (s.length < 2) {
    return s[0] || '';
  }

  const aIndexMap = new Map();
  for (let i = 0; i < s.length; i += 1) {
    const a = s[i];
    const aIndexList = aIndexMap.get(a) || [];
    aIndexList.push(i);
    aIndexMap.set(a, aIndexList);
  }

  let answerStart = 0;
  let answerEnd = 0;
  for (const [a, aIndexList] of aIndexMap.entries()) {
    if (aIndexList.length < 2) {
      continue;
    }

    for (let i = 0; i < aIndexList.length; i += 1) {
      for (let j = aIndexList.length - 1; j > i; j -= 1) {
        const start = aIndexList[i];
        const end = aIndexList[j];
        if (end - start <= answerEnd - answerStart) {
          break;
        }

        if (isPalindromic(s, start, end)) {
          answerStart = start;
          answerEnd = end;
        }
      }
    }
  }

  return s.substring(answerStart, answerEnd + 1);
};

/**
 * @param {String} s
 * @param {Number} start
 * @param {Number} end
 * @return {Boolean}
 */
function isPalindromic(s, start, end) {
  for (let i = 0; i < (end - start) / 2; i += 1) {
    const headIndex = start + i;
    const lastIndex = end - i;
    if (s[headIndex] !== s[lastIndex]) {
      return false;
    }
  }

  return true;
}
