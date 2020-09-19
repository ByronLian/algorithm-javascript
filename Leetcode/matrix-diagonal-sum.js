// https://leetcode.com/problems/matrix-diagonal-sum/
// Runtime: 68 ms, faster than 97.00% of JavaScript online submissions for Matrix Diagonal Sum.
// Memory Usage: 37.8 MB, less than 44.00% of JavaScript online submissions for Matrix Diagonal Sum.

/*
 * @param {number[][]} mat
 * @return {number}
 */

var diagonalSum = function (mat) {
  let left = 0;
  let right = mat[0].length - 1;
  let total = 0;

  for (let i = 0; i < mat.length; i++) {
    total = total + mat[i][left] + mat[i][right];
    // Case that array child has odd number elements
    // [1, 2, 3]
    if (left === right) total -= mat[i][left];
    left++;
    right--;
  }

  return total;
};