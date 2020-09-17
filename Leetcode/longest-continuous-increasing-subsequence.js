// https://leetcode.com/problems/longest-continuous-increasing-subsequence/
// Runtime: 68 ms, faster than 97.21% of JavaScript online submissions for Longest Continuous Increasing Subsequence.
// Memory Usage: 37.3 MB, less than 79.19% of JavaScript online submissions for Longest Continuous Increasing Subsequence.

/*
 * @param {number[]} nums
 * @return {number}
 */

var findLengthOfLCIS = function (nums) {
  const len = nums.length;
  if (len < 2) return len;

  let count = 1;
  let max = count;
  for (let i = 0; i < len - 1; i++) {
    if (nums[i + 1] > nums[i]) {
      count++;
    } else {
      if (count > max) max = count;
      count = 1;
    }
  }

  return count > max ? count : max;
};