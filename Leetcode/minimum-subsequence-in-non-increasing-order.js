// https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/
// Runtime: 84 ms, faster than 86.13% of JavaScript online submissions for Minimum Subsequence in Non-Increasing Order.
// Memory Usage: 39 MB, less than 35.84% of JavaScript online submissions for Minimum Subsequence in Non-Increasing Order.

/*
 * @param {number[]} nums
 * @return {number[]}
 */

var minSubsequence = function (nums) {
  nums.sort((a, b) => b - a);
  const total = nums.reduce((acc, val) => (acc += val));
  let count = 0;
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    count += nums[i];
    result.push(nums[i]);
    if (count > total - count) break;
  }

  return result;
};
