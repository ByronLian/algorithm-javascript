// https://leetcode.com/problems/shuffle-the-array/
// Runtime: 80 ms, faster than 73.84% of JavaScript online submissions for Shuffle the Array.
// Memory Usage: 38.9 MB, less than 26.00% of JavaScript online submissions for Shuffle the Array.

/*
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */

var shuffle = function (nums, n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(nums[i], nums[n + i])
  }
  return result;
};
