// https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/
// Runtime: 72 ms, faster than 84.93% of JavaScript online submissions for Count Negative Numbers in a Sorted Matrix.
// Memory Usage: 38 MB, less than 31.63% of JavaScript online submissions for Count Negative Numbers in a Sorted Matrix.

/*
 * @param {number[][]} grid
 * @return {number}
 */

var countNegatives = function (grid) {
  let count = 0;

  for (let i = grid.length - 1; i >= 0; i--) {
    for (let j = grid[i].length - 1; j >= 0; j--) {
      if (grid[i][j] < 0) {
        count++
      } else {
        break;
      }
    }
  }

  return count;
};