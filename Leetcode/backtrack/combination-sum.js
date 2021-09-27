// https://leetcode.com/problems/combination-sum/
// Runtime: 80 ms, faster than 95.83% of JavaScript online submissions for Combination Sum.
// Memory Usage: 45.5 MB, less than 20.84% of JavaScript online submissions for Combination Sum.

/*
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum = function (candidates, target) {
  const result = [];
  const len = candidates.length;

  const checkAndPick = (arr, sum, start) => {
    if (sum > target || start > len - 1) return;

    if (sum === target) return result.push(arr);

    for (let i = start; i < len; i++) {
      arr.push(candidates[i]);
      checkAndPick([...arr], sum + candidates[i], i);
      arr.pop();
    }
  }

  checkAndPick([], 0, 0);
  return result;
};