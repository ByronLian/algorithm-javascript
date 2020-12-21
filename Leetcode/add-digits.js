// https://leetcode.com/problems/add-digits/
// Runtime: 76 ms, faster than 52.56% of JavaScript online submissions for Add Digits.
// Memory Usage: 36.1 MB, less than 66.67% of JavaScript online submissions for Add Digits.

/*
 * @param {number} num
 * @return {number}
 */

var addDigits = function (num) {
  // e.g 234
  // 234 => '234' => ['2', '3', '4'] => get total
  // a = accumulator
  // c = currentValue
  while (num.toString().length > 1) {
    num = num
      .toString()
      .split("")
      .reduce((a, c) => parseInt(a, 10) + parseInt(c, 10));
  }

  return num;
};
