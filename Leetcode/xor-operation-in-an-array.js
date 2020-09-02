// https://leetcode.com/problems/xor-operation-in-an-array/
// Runtime: 72 ms, faster than 82.15% of JavaScript online submissions for XOR Operation in an Array.
// Memory Usage: 36.8 MB, less than 25.66% of JavaScript online submissions for XOR Operation in an Array.

/*
 * @param {number} n
 * @param {number} start
 * @return {number}
 */

var xorOperation = function (n, start) {
  let result = 0;

  let i = 0;
  while (i < n) {
    result ^= start + 2 * i;
    i++;
  }

  return result;
};
