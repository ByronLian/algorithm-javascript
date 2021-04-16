// https://leetcode.com/problems/sign-of-the-product-of-an-array/
// Runtime: 76 ms, faster than 94.44% of JavaScript online submissions for Sign of the Product of an Array.
// Memory Usage: 40.3 MB, less than 11.90% of JavaScript online submissions for Sign of the Product of an Array.

/*
 * @param {number[]} nums
 * @return {number}
 */

var arraySign = function (nums) {
  if (nums.includes(0)) return 0;

  const product = nums.reduce((acc, val) => (acc *= val));
  return product > 0 ? 1 : -1;
};
