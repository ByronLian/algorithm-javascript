// https://leetcode.com/problems/maximum-subarray/
// Runtime: 76 ms, faster than 82.34% of JavaScript online submissions for Maximum Subarray.
// Memory Usage: 37.5 MB, less than 27.23% of JavaScript online submissions for Maximum Subarray.

/*
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function (nums) {
  let sum = nums[0],
    max = nums[0];

  for (let i = 1; i < nums.length; ++i) {
    sum = Math.max(sum + nums[i], nums[i]),
      max = Math.max(max, sum);
  }

  return max;
};