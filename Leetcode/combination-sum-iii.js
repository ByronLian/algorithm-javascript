// https://leetcode.com/problems/combination-sum-iii/
// Runtime: 64 ms, faster than 98.60% of JavaScript online submissions for Combination Sum III.
// Memory Usage: 40.2 MB, less than 30.18% of JavaScript online submissions for Combination Sum III.

/*
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */

var combinationSum3 = function (k, n) {
  const result = [];

  const checkAndPick = (arr, sum, start) => {
    if (arr.length && sum === n && arr.length === k) return result.push(arr);
    if (arr.length >= k || sum >= n) return;

    for (let i = start; i <= n && i < 10; i++) {
      arr.push(i);
      checkAndPick([...arr], sum + i, i + 1);
      arr.pop(); // backtrack
    }
  }

  checkAndPick([], 0, 1);
  return result
};