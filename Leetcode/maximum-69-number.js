// https://leetcode.com/problems/maximum-69-number/
// Runtime: 68 ms, faster than 86.53% of JavaScript online submissions for Maximum 69 Number.
// Memory Usage: 37 MB, less than 8.68% of JavaScript online submissions for Maximum 69 Number.

/*
 * @param {number} num
 * @return {number}
 */

var maximum69Number = function (num) {
  return parseInt(num.toString().replace("6", "9"));
};
