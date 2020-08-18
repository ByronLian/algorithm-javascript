// https://leetcode.com/problems/sort-the-matrix-diagonally/
// Runtime: 88 ms, faster than 87.73% of JavaScript online submissions for Sort the Matrix Diagonally.
// Memory Usage: 40.2 MB, less than 28.83% of JavaScript online submissions for Sort the Matrix Diagonally.

/*
 * @param {number[][]} mat
 * @return {number[][]}
 */

var diagonalSort = function (mat) {
  let m = {};

  // m
  //
  // {
  //   '0': [ 3, 2, 1 ],
  //   '1': [ 2, 1 ],
  //   '2': [ 1 ],
  //   '-1': [ 3, 1, 2 ],
  //   '-2': [ 1, 2 ],
  //   '-3': [ 1 ]
  // }
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (!m[i - j]) m[i - j] = [];
      m[i - j].push(mat[i][j]);
    }
  }

  // Sorting m
  //
  // {
  //   '0': [ 1, 2, 3 ],
  //   '1': [ 1, 2 ],
  //   '2': [ 1 ],
  //   '-1': [ 1, 2, 3 ],
  //   '-2': [ 1, 2 ],
  //   '-3': [ 1 ]
  // }
  for (let k in m) {
    m[k].sort((a, b) => a - b);
  }

  // Update value back to original array
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      const temp = m[i - j].shift();
      mat[i][j] = temp;
    }
  }

  return mat;
};