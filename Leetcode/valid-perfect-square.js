// https://leetcode.com/problems/valid-perfect-square/
// Runtime: 76 ms, faster than 79.84% of JavaScript online submissions for Valid Perfect Square.
// Memory Usage: 38.3 MB, less than 71.23% of JavaScript online submissions for Valid Perfect Square.

/*
 * @param {number} num
 * @return {boolean}
 */

var isPerfectSquare = function (num) {
  for (let i = 1; i <= num; i++) {
    if (i * i > num) return false;
    if (i * i === num) return true;
  }
};
