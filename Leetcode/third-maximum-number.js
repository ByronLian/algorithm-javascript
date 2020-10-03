// https://leetcode.com/problems/third-maximum-number/
// Runtime: 76 ms, faster than 85.71% of JavaScript online submissions for Third Maximum Number.
// Memory Usage: 39.1 MB, less than 33.09% of JavaScript online submissions for Third Maximum Number.

/*
 * @param {number[]} nums
 * @return {number}
 */

var thirdMax = function (nums) {
  if (nums.length === 1) return nums[0];

  nums.sort((a, b) => b - a);

  let count = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] !== nums[i]) count++;
    if (count === 3) return nums[i + 1];
  }

  return nums[0];
};