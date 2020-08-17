// https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/
// Runtime: 72 ms, faster than 81.86% of JavaScript online submissions for Maximum Product of Two Elements in an Array.
// Memory Usage: 37.2 MB, less than 20.86% of JavaScript online submissions for Maximum Product of Two Elements in an Array.

/*
 * @param {number[]} nums
 * @return {number}
 */

var maxProduct = function (nums) {
  nums.sort((a, b) => a - b);
  return (nums[nums.length - 1] - 1) * (nums[nums.length - 2] - 1);
};
