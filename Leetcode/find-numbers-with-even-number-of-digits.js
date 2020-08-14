// https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
// Runtime: 72 ms, faster than 83.00% of JavaScript online submissions for Find Numbers with Even Number of Digits.
// Memory Usage: 37.7 MB, less than 19.32% of JavaScript online submissions for Find Numbers with Even Number of Digits.

/*
 * @param {number[]} nums
 * @return {number}
 */

var findNumbers = function (nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i].toString().length % 2 === 0) count++;
  }

  return count;
};

