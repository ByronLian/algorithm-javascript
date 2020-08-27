// https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/
// Runtime: 72 ms, faster than 93.26% of JavaScript online submissions for Maximize Sum Of Array After K Negations.
// Memory Usage: 37.2 MB, less than 76.40% of JavaScript online submissions for Maximize Sum Of Array After K Negations.

/*
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */

var largestSumAfterKNegations = function (A, K) {
  A.sort((a, b) => a - b);

  for (let i = 0; i < A.length; i++) {
    if (K === 0) break;

    if (A[i] < 0) {
      A[i] = -A[i];
    } else {
      if (K % 2 === 0) break;
      K = 1;
      break;
    }

    K--;
  }

  if (K === 1) {
    A.sort((a, b) => a - b);
    A[0] = -A[0];
  }

  return A.reduce((acc, val) => acc + val);
};
