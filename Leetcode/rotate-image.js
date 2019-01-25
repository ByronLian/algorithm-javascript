// https://leetcode.com/problems/rotate-image/
// Runtime: 68 ms, faster than 17.09% of JavaScript online submissions for Rotate Image.

/*
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var rotate = function (matrix) {
  const n = matrix.length;
  let j = 0;
  let temp = [];

  // Solution:
  // My way is pick up element into temp array and modify matrix

  // Pick up element into array
  while (j < n) {
    for (let i = n - 1; i >= 0; i--) {
      temp.push(matrix[i][j]);
    }
    j++;
  }

  // Modify matrix
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      matrix[i][j] = temp.shift();
    }
  }

  return matrix;
};