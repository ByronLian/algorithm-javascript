// https://leetcode.com/problems/strobogrammatic-number/
// Runtime: 64 ms, faster than 100.00% of JavaScript online submissions for Strobogrammatic Number.
// Memory Usage: 38.2 MB, less than 26.71% of JavaScript online submissions for Strobogrammatic Number.

/*
 * @param {string} num
 * @return {boolean}
 */

var isStrobogrammatic = function (num) {
  let flag = true;
  let i = num.length - 1;
  const len =  Math.floor(num.length / 2);

  while (flag && i >= len) {
    const rightEl = num[i];
    const leftEl = num[num.length - i - 1];

    switch (rightEl) {
      case "0":
      case "1":
      case "8":
        if (rightEl !== leftEl) flag = false;
        break;
      case "6":
        if (leftEl !== "9") flag = false;
        break;
      case "9":
        if (leftEl !== "6") flag = false;
        break;
      case "2":
      case "3":
      case "4":
      case "5":
      case "7":
        flag = false;
        break;
      default:
        break;
    }

    i--;
  }

  return flag;
};
