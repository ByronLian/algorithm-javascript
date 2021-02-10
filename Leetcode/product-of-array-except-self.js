// https://leetcode.com/problems/product-of-array-except-self/
// Runtime: 108 ms, faster than 97.28% of JavaScript online submissions for Product of Array Except Self.
// Memory Usage: 50.5 MB, less than 25.76% of JavaScript online submissions for Product of Array Except Self.

/*
 * @param {number[]} nums
 * @return {number[]}
 */

var productExceptSelf = function (nums) {
  const result = new Array(nums.length);

  // Fill left side product result in to result
  result[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    result[i] = nums[i - 1] * result[i - 1];
  }

  // Times right side product into result
  let R = 1;
  for (let j = nums.length - 1; j >= 0; j--) {
    result[j] = result[j] * R;
    R *= nums[j];
  }

  return result;
};
