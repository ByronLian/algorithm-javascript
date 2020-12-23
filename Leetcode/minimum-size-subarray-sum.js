// https://leetcode.com/problems/minimum-size-subarray-sum/
// Runtime: 72 ms, faster than 96.90% of JavaScript online submissions for Minimum Size Subarray Sum.
// Memory Usage: 39.4 MB, less than 67.52% of JavaScript online submissions for Minimum Size Subarray Sum.

/*
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */

var minSubArrayLen = function (s, nums) {
  const len = nums.length;
  if (len === 0) return 0;

  let sum = 0;
  let left = 0;
  let length = Infinity;

  for (let i = 0; i < len; i++) {
    sum += nums[i];

    while (sum >= s) {
      length = Math.min(length, i + 1 - left);
      sum -= nums[left];
      left++;
    }
  }

  return length !== Infinity ? length : 0;
};
