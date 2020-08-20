// https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/
// Runtime: 76 ms, faster than 80.13% of JavaScript online submissions for The K Weakest Rows in a Matrix.
// Memory Usage: 39 MB, less than 15.83% of JavaScript online submissions for The K Weakest Rows in a Matrix.

/*
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */

var kWeakestRows = function (mat, k) {
  let store = [];
  let result = [];
  // Input [[1,1,0,0,0],[1,1,1,1,0],[1,0,0,0,0],[1,1,0,0,0],[1,1,1,1,1]]
  // Output [ [ 0, 2 ], [ 1, 4 ], [ 2, 1 ], [ 3, 2 ], [ 4, 5 ] ]
  for (let i = 0; i < mat.length; i++) {
    store.push([i, mat[i].filter((x) => x === 1).length]);
  }

  // Input [ [ 0, 2 ], [ 1, 4 ], [ 2, 1 ], [ 3, 2 ], [ 4, 5 ] ]
  // Output [ [ 2, 1 ], [ 0, 2 ], [ 3, 2 ], [ 1, 4 ], [ 4, 5 ] ]
  store.sort((a, b) => a[1] - b[1]);

  for (let j = 0; j < k; j++) {
    result.push(store[j][0]);
  }

  return result;
};
