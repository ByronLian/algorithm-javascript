// https://leetcode.com/problems/create-target-array-in-the-given-order/
// Runtime: 68 ms, faster than 85.74% of JavaScript online submissions for Create Target Array in the Given Order.
// Memory Usage: 36.9 MB, less than 16.05% of JavaScript online submissions for Create Target Array in the Given Order.

/*
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */

var createTargetArray = function (nums, index) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    // If no value in result for target index then assign value
    // Else move space for value
    if (result[index[i]] === undefined) {
      result[index[i]] = nums[i];
    } else {
      result.splice(index[i], 0, nums[i]);
    }
  }

  return result;
};
