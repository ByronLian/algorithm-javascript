// https://leetcode.com/problems/maximum-length-of-repeated-subarray/

/*
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */

var findLength = function (A, B) {
  const dp = Array(A.length + 1)
    .fill(0)
    .map(() => Array(B.length + 1).fill(0));

  let maxLength = 0;
  for (let i = 1; i <= A.length; i++) {
    for (let j = 1; j <= B.length; j++) {
      if (A[i - 1] === B[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
        maxLength = Math.max(maxLength, dp[i][j]);
      }
    }
  }

  return maxLength;
};
