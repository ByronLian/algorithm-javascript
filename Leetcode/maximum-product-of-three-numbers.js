// https://leetcode.com/problems/maximum-product-of-three-numbers/
// Runtime: 112 ms, faster than 72.76% of JavaScript online submissions for Maximum Product of Three Numbers.
// Memory Usage: 39.9 MB, less than 65.07% of JavaScript online submissions for Maximum Product of Three Numbers.

/*
 * @param {number[]} nums
 * @return {number}
 */

var maximumProduct = function (nums) {
  nums.sort((a, b) => b - a);
  return Math.max(nums[0] * nums[1] * nums[2], nums[0] * nums[nums.length - 1] * nums[nums.length - 2]);
};