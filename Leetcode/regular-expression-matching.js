// https://leetcode.com/problems/regular-expression-matching
// Runtime: 88 ms, faster than 91.70% of JavaScript online submissions for Regular Expression Matching.
// Memory Usage: 42.6 MB, less than 36.10% of JavaScript online submissions for Regular Expression Matching.

/*
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

var isMatch = function (s, p) {
  const dp = {};

  const dfs = (i, j) => {
    if (dp[`${i},${j}`] !== undefined) return dp[`${i},${j}`];

    // Case that match all
    if (i >= s.length && j >= p.length) return true;
    // Case that pattern is finished but target still not finish yet
    if (j >= p.length) return false;

    // Case that current letter match
    const match = i < s.length && (s[i] === p[j] || p[j] === '.');

    // Case that next pattern is *
    if (j + 1 < p.length && p[j + 1] === '*') {
      dp[`${i},${j}`] = dfs(i, j + 2) || (match && dfs(i + 1, j));
      return dp[`${i},${j}`];
    }

    if (match) {
      dp[`${i},${j}`] = dfs(i + 1, j + 1);
      return dp[`${i},${j}`];
    }

    dp[`${i},${j}`] = false;
    return false;
  }

  return dfs(0, 0);
};

