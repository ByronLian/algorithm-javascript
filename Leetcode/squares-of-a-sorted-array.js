// https://leetcode.com/problems/squares-of-a-sorted-array/
// Runtime: 116 ms, faster than 81.83% of JavaScript online submissions for Squares of a Sorted Array.
// Memory Usage: 44 MB, less than 12.42% of JavaScript online submissions for Squares of a Sorted Array.

/*
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
  return A.map(x => x * x).sort((a, b) => a - b);
};