// https://leetcode.com/problems/base-7/
// Runtime: 68 ms, faster than 90.20% of JavaScript online submissions for Base 7.
// Memory Usage: 37.1 MB, less than 12.74% of JavaScript online submissions for Base 7.

/*
 * @param {number} num
 * @return {string}
 */

var convertToBase7 = function (num) {
  if (num === 0) return "0";

  let strArr = [];
  let isNegative = false;
  if (num < 0) {
    isNegative = true;
    num = 0 - num;
  }

  while (num > 0) {
    strArr.push(num % 7);
    num = Math.trunc(num / 7);
  }

  if (isNegative) strArr.push('-');

  return strArr.reverse().join('');
};