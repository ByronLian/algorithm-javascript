// https://leetcode.com/problems/sum-of-square-numbers/
// Runtime: 60 ms, faster than 100.00% of JavaScript online submissions for Sum of Square Numbers.
// Memory Usage: 36.3 MB, less than 95.93% of JavaScript online submissions for Sum of Square Numbers.

/*
 * @param {number} c
 * @return {boolean}
 */

var judgeSquareSum = function (c) {
  const limit = Math.floor(Math.sqrt(c));

  for (let i = limit; i >= 0; i--) {
    if (Number.isInteger(Math.sqrt(c - i * i))) return true;
  }

  return false;
};
