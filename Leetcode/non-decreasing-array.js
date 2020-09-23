// https://leetcode.com/problems/non-decreasing-array/
// Runtime: 76 ms, faster than 97.43% of JavaScript online submissions for Non-decreasing Array.
// Memory Usage: 39.2 MB, less than 90.49% of JavaScript online submissions for Non-decreasing Array.

/*
 * @param {number[]} nums
 * @return {boolean}
 */

var checkPossibility = function (nums) {
  let count = 0;

  for (let i = 0; i <= nums.length - 1; i++) {
    if (count > 1) return false;
    if (nums[i + 1] < nums[i]) {
      count++;

      // Case [5, 7, 1, 8]
      // Case [2, 3, 1, 3]
      if (nums[i - 1] > nums[i + 1] && nums[i + 2] < nums[i]) return false;
    }
  }

  return true;
};
