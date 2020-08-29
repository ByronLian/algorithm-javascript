// https://leetcode.com/problems/longest-harmonious-subsequence/
// Runtime: 136 ms, faster than 68.39% of JavaScript online submissions for Longest Harmonious Subsequence.
// Memory Usage: 47.6 MB, less than 32.19% of JavaScript online submissions for Longest Harmonious Subsequence.

/*
 * @param {number[]} nums
 * @return {number}
 */

var findLHS = function (nums) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]] += 1;
    } else {
      map[nums[i]] = 1;
    }
  }

  let prev = -Infinity;
  let longest = 0;
  nums.sort((a, b) => a - b);

  for (let j = 0; j < nums.length; j++) {
    if (Math.abs(nums[j] - prev) === 1 && map[prev] + map[nums[j]] > longest) {
      longest = map[prev] + map[nums[j]];
    }
    prev = nums[j];
  }

  return longest;
};