// https://leetcode.com/problems/toeplitz-matrix/
// Runtime: 80 ms, faster than 88.63% of JavaScript online submissions for Toeplitz Matrix.
// Memory Usage: 38.8 MB, less than 11.67% of JavaScript online submissions for Toeplitz Matrix.

/*
 * @param {number[][]} matrix
 * @return {boolean}
 */

var isToeplitzMatrix = function (matrix) {
  let map = {};

  let flag = true;
  for (i = 0; i < matrix.length; i++) {
    if (!flag) break;
    for (j = 0; j < matrix[0].length; j++) {
      if (map[j - i] !== undefined) {
        if (map[j - i] !== matrix[i][j]) {
          flag = false;
          break;
        }
      } else {
        map[j - i] = matrix[i][j];
      }
    }
  }

  return flag;
};