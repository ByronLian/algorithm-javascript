// https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/
// Runtime: 80 ms, faster than 100.00% of JavaScript online submissions for Minimum Operations to Make the Array Increasing.
// Memory Usage: 40.8 MB, less than 100.00% of JavaScript online submissions for Minimum Operations to Make the Array Increasing.

/*
 * @param {number[]} nums
 * @return {number}
 */

var minOperations = function (nums) {
  let total = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] <= nums[i]) {
      total += nums[i] + 1 - nums[i + 1];
      nums[i + 1] = nums[i] + 1;
    }
  }

  return total;
};
