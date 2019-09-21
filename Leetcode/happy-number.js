// https://leetcode.com/problems/happy-number/
// Runtime: 60 ms, faster than 83.13% of JavaScript online submissions for Happy Number.
// Memory Usage: 36.2 MB, less than 38.46% of JavaScript online submissions for Happy Number.

/*
 * @param {number} n
 * @return {boolean}
 */

var isHappy = function (n) {

  if (n === 1) return true;
  if (n > 1 && n < 10) n *= n;
  let historyValue = {};

  for (; ;) {
    n = n.toString().split``.reduce((sum, n) => sum += parseInt(n) * parseInt(n), 0);
    if (n !== 1) {
      if (historyValue[n]) {
        return false;
      } else {
        historyValue[n] = 1;
      }
    } else {
      return true;
    }
    if (n > 1 && n < 10) n *= n;
  }
};
