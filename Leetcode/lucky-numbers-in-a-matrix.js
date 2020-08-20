// https://leetcode.com/problems/lucky-numbers-in-a-matrix/
// Runtime: 76 ms, faster than 85.67% of JavaScript online submissions for Lucky Numbers in a Matrix.
// Memory Usage: 39.9 MB, less than 19.74% of JavaScript online submissions for Lucky Numbers in a Matrix.

/*
 * @param {number[][]} matrix
 * @return {number[]}
 */

var luckyNumbers = function (matrix) {
  if (matrix.length === 1) return [Math.min(...matrix[0])];

  let maxOfCol = new Array(matrix[0].length).fill(0);
  let minOfRow = new Array(matrix[0].length).fill(0);

  // Find min of Row and max of col
  for (let i = 0; i < matrix.length; i++) {
    minOfRow[i] = Math.min(...matrix[i]);
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] > maxOfCol[j]) maxOfCol[j] = matrix[i][j];
    }
  }

  // If there's same element then return it
  for (let k = 0; k < maxOfCol.length; k++) {
    if (minOfRow.indexOf(maxOfCol[k]) !== -1) return [maxOfCol[k]];
  }

  return [];
};
