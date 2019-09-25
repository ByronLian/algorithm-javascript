// https://leetcode.com/problems/contains-duplicate/
// Runtime: 68 ms, faster than 69.92% of JavaScript online submissions for Contains Duplicate.
// Memory Usage: 42.3 MB, less than 23.53% of JavaScript online submissions for Contains Duplicate.

/*
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function (nums) {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      return true;
    } else {
      obj[nums[i]] = 1;
    }
  }

  return false;
};
