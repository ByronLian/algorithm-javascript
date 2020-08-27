// https://leetcode.com/problems/missing-number/
// Runtime: 72 ms, faster than 95.01% of JavaScript online submissions for Missing Number.
// Memory Usage: 39.5 MB, less than 26.21% of JavaScript online submissions for Missing Number.

/*
 * @param {number[]} nums
 * @return {number}
 */

var missingNumber = function (nums) {
  let total = ((nums.length + 1) * nums.length) / 2;

  for (let i = 0; i < nums.length; i++) {
    total -= nums[i];
  }

  return total;
};
