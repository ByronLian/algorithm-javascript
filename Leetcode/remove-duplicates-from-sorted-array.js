// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// Runtime: 84 ms, faster than 42.90% of JavaScript online submissions for Remove Duplicates from Sorted Array.
// Memory Usage: 37.6 MB, less than 22.92% of JavaScript online submissions for Remove Duplicates from Sorted Array.

/*
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function (nums) {

  if (nums.length <= 1) return nums.length;

  let temp = nums[0];
  for (let i = 1; i <= nums.length; i++) {
    if (nums[i] === temp) {
      nums.splice(i, 1);
      i--;
    } else {
      temp = nums[i];
    }
  }

  return nums.length;
};