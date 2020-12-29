// https://leetcode.com/problems/move-zeroes/
// Runtime: 80 ms, faster than 92.14% of JavaScript online submissions for Move Zeroes.
// Memory Usage: 40.3 MB, less than 64.91% of JavaScript online submissions for Move Zeroes.

/*
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function (nums) {
  // Solution
  // The idea is remove 0 and add new one to last when we found 0
  let i = 0;
  while (i < nums.length) {
    if (nums[i] === 0) {
      nums.push(nums.splice(i, 1));
    } else {
      i++;
    }
  }

  return nums;
};
