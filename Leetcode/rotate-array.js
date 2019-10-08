// https://leetcode.com/problems/rotate-array/
// Runtime: 84 ms, faster than 57.65% of JavaScript online submissions for Rotate Array.
// Memory Usage: 35.4 MB, less than 47.37% of JavaScript online submissions for Rotate Array.

/*
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function (nums, k) {
  // Check how many elements we need to move from back to front
  const lastElements = k > nums.length ? k % nums.length : k;

  if (lastElements === nums.length) return nums;

  for (let i = 0; i < lastElements; i++) {
    nums.unshift(nums.pop());
  }

  return nums;

};
