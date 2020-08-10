// https://leetcode.com/problems/xor-operation-in-an-array/
// Runtime: 72 ms, faster than 59.86% of JavaScript online submissions for XOR Operation in an Array.
// Memory Usage: 36.3 MB, less than 85.71% of JavaScript online submissions for XOR Operation in an Array.

/*
 * @param {number} n
 * @param {number} start
 * @return {number}
 */

var xorOperation = function (n, start) {

  const result = [];

  let i = 0
  while (result.length < n) {
    result.push(start + 2 * i);
    i++;
  }

  return result.reduce((acc, val) => acc ^ val);
};
