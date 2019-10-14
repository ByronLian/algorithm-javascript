// https://leetcode.com/problems/next-greater-element-ii/
// Runtime: 132 ms, faster than 41.90% of JavaScript online submissions for Next Greater Element II.
// Memory Usage: 41.2 MB, less than 100.00% of JavaScript online submissions for Next Greater Element II.

/*
 * @param {number[]} nums
 * @return {number[]}
 */

var nextGreaterElements = function (nums) {
  let result = [];
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    const val = nums[i];
    let isNotFound = true;

    // Find right side
    for (let j = i; j < len; j++) {
      if (nums[j] > val) {
        result.push(nums[j]);
        isNotFound = false;
        break;
      }
    }

    // If not in right side then find left side
    if (isNotFound) {
      for (let k = 0; k < i; k++) {
        if (nums[k] > val) {
          result.push(nums[k]);
          isNotFound = false;
          break;
        }
      }
    }

    // If not in 2 sides
    if (isNotFound) result.push(-1);
  }

  return result;
};