// https://leetcode.com/problems/score-after-flipping-matrix/
// Runtime: 84 ms, faster than 31.03% of JavaScript online submissions for Score After Flipping Matrix.
// Memory Usage: 37.3 MB, less than 17.24% of JavaScript online submissions for Score After Flipping Matrix.

/*
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function (A) {
  let dp = [...Array(A[0].length).fill(0)];
  let result = 0;

  // Toggling row to make sure first element of each row is 1
  // Also count the 0 for col
  for (let i = 0; i < A.length; i++) {
    const isToggling = A[i][0] === 0 ? true : false;
    for (let j = 0; j < A[i].length; j++) {
      if (isToggling) A[i][j] = A[i][j] === 0 ? 1 : 0;
      if (A[i][j] === 0) dp[j] += 1;
    }
  }

  // Toggling the col to make sure each col have more than half elements are 1
  for (let k = 0; k < A[0].length; k++) {
    const isToggling = dp[k] / A.length > 0.5 ? true : false;
    for (let l = 0; l < A.length; l++) {
      if (isToggling) A[l][k] = A[l][k] === 0 ? 1 : 0;
    }
  }

  // Counting result
  for (let m = 0; m < A.length; m++) {
    result += parseInt(A[m].join(''), 2);
  }

  return result;
};




