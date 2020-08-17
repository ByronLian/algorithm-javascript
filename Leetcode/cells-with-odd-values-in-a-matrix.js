// https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/
// Runtime: 80 ms, faster than 66.67% of JavaScript online submissions for Cells with Odd Values in a Matrix.
// Memory Usage: 37.1 MB, less than 81.38% of JavaScript online submissions for Cells with Odd Values in a Matrix.

/*
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */

var oddCells = function (n, m, indices) {
  let count = 0;

  // Initial arry with 0
  const result = new Array(n).fill(0);
  for (let i = 0; i < result.length; i++) {
    result[i] = new Array(m).fill(0);
  }

  for (let i = 0; i < indices.length; i++) {
    const row = indices[i][0];
    const col = indices[i][1];

    for (let j = 0; j < n; j++) {
      for (let k = 0; k < m; k++) {
        if (j === row) result[j][k] += 1;
        if (k === col) result[j][k] += 1;
        // Only check value is even or odd at the last loop
        if (i === indices.length - 1 && result[j][k] % 2 !== 0) count++;
      }
    }
  }

  return count;
};
