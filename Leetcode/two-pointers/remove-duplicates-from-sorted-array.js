// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// Runtime: 84 ms, faster than 87.27% of JavaScript online submissions for Remove Duplicates from Sorted Array.
// Memory Usage: 41.5 MB, less than 46.91% of JavaScript online submissions for Remove Duplicates from Sorted Array.

/*
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};
