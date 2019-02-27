// https://leetcode.com/problems/move-zeroes/
// Runtime: 64 ms, faster than 85.55% of JavaScript online submissions for Move Zeroes.
// Memory Usage: 35.6 MB, less than 88.50% of JavaScript online submissions for Move Zeroes.

/*
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function (nums) {
  let len = nums.length;
  let i = 0;
  
  // Solution
  // The idea is remove 0 and add new one to last when we found 0
  while (i < len) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums[nums.length] = 0;
      len--;
    } else {
      i++;
    }
  }
};