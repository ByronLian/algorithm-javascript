// https://leetcode.com/problems/running-sum-of-1d-array/
// Runtime: 68 ms, faster than 90.48% of JavaScript online submissions for Running Sum of 1d Array.
// Memory Usage: 37.4 MB, less than 100.00% of JavaScript online submissions for Running Sum of 1d Array.

/*
 * @param {number[]} nums
 * @return {number[]}
 */

var runningSum = function (nums) {
  const len = nums.length;
  if (len < 2) return nums;

  for (let i = 0; i < len - 1; i++) {
    nums[i + 1] += nums[i];
  }

  return nums;
}
