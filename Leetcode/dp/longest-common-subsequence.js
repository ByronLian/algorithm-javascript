// https://leetcode.com/problems/longest-common-subsequence

/*
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

var longestCommonSubsequence = function (text1, text2) {
  // Create matrix has text1.length + 1 * text2.length + 1

  const dp = Array.from(Array(text1.length + 1), () =>
    Array(text2.length + 1).fill(0)
  );

  for (let col = text2.length - 1; col >= 0; col--) {
    for (let row = text1.length - 1; row >= 0; row--) {
      if (text1[row] === text2[col]) {
        dp[row][col] = dp[row + 1][col + 1] + 1;
      } else {
        dp[row][col] = Math.max(dp[row + 1][col], dp[row][col + 1]);
      }
    }
  }

  return dp[0][0];
};
