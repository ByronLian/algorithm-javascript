// https://leetcode.com/problems/combination-sum-ii/
// Runtime: 72 ms, faster than 97.94% of JavaScript online submissions for Combination Sum II.
// Memory Usage: 40.7 MB, less than 58.32% of JavaScript online submissions for Combination Sum II.

/*
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum2 = function (candidates, target) {
  if (candidates.length === 0) return [];
  const result = [];
  candidates.sort((a, b) => a - b);

  const checkAndPick = (nums, target, arr, start) => {
    if (target === 0) return result.push(arr);

    for (let i = start; i < nums.length; i++) {
      if (target < nums[i]) return;
      if (i !== start && nums[i] === nums[i - 1]) continue;

      arr.push(nums[i]);
      checkAndPick(nums, target - nums[i], [...arr], i + 1);
      arr.pop();
    }
  }

  checkAndPick(candidates, target, [], 0);
  return result;
};