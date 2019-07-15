/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  let spaceIndex = 0;
  while (str[spaceIndex] === ' ') {
    spaceIndex += 1;
  }
  str = str.slice(spaceIndex);

  let minsSign = false;
  if (isNaN(Number(str[0]))) {
    if (str[0] === '-') {
      minsSign = true;
    }
    else if (str[0] !== '+') {
      return 0;
    }
    str = str.slice(1);
  }


  let num = 0;
  run: for (const c of str) {
    switch (c) {
      case '0': {
        num = num * 10 + 0;
        break;
      }
      case '1': {
        num = num * 10 + 1;
        break;
      }
      case '2': {
        num = num * 10 + 2;
        break;
      }
      case '3': {
        num = num * 10 + 3;
        break;
      }
      case '4': {
        num = num * 10 + 4;
        break;
      }
      case '5': {
        num = num * 10 + 5;
        break;
      }
      case '6': {
        num = num * 10 + 6;
        break;
      }
      case '7': {
        num = num * 10 + 7;
        break;
      }
      case '8': {
        num = num * 10 + 8;
        break;
      }
      case '9': {
        num = num * 10 + 9;
        break;
      }
      default: {
        break run;
      }
    }
  }
  if (minsSign) {
    num *= -1;
  }

  if (num < -2147483648) {
    return -2147483648;
  }
  if (num > 2147483647) {
    return 2147483647
  }
  return num;
};
