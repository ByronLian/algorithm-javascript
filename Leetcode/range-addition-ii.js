// https://leetcode.com/problems/range-addition-ii/
// Runtime: 76 ms, faster than 84.00% of JavaScript online submissions for Range Addition II.
// Memory Usage: 39.1 MB, less than 6.00% of JavaScript online submissions for Range Addition II.

/*
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */

var maxCount = function (m, n, ops) {
  if (ops.length === 0) return m * n;

  let minR = Infinity;
  let minL = Infinity;

  for (let i = 0; i < ops.length; i++) {
    if (ops[i][0] < minR) minR = ops[i][0];
    if (ops[i][1] < minL) minL = ops[i][1];
  }

  return minR * minL;
};
