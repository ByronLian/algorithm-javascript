// https://leetcode.com/problems/plus-one/
// Runtime: 48 ms, faster than 94.74% of JavaScript online submissions for Plus One.
// Memory Usage: 33.7 MB, less than 93.62% of JavaScript online submissions for Plus One.

/*
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function (digits) {
  let len = digits.length;
  if (len === 1 && digits[0] === 9) return [1, 0];

  let carry = 1;
  if (digits[len - 1] === 9) {
    // Case: [7, 9] return [8, 0]
    digits[len - 1] = 0;
    for (let i = len - 2; i >= 0; i--) {
      if (digits[i] + carry > 9) {
        digits[i] = 0;
      } else {
        digits[i] = digits[i] + 1;
        return digits;
      }
    }
    // Case: [9, 9] return [1, 0, 0]
    digits.unshift(1);
    return digits;
  } else {
    // Case: [7, 8] return [7, 9]
    digits[len - 1] = digits[len - 1] + 1;
    return digits;
  }
};