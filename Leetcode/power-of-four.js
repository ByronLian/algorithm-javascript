// https://leetcode.com/problems/power-of-four/
// Runtime: 64 ms, faster than 90.43% of JavaScript online submissions for Power of Four.
// Memory Usage: 35.5 MB, less than 100.00% of JavaScript online submissions for Power of Four.

/*
 * @param {number} num
 * @return {boolean}
 */

var isPowerOfFour = function (num) {

  // Runtime: 72 ms, faster than 62.10% of JavaScript online submissions for Power of Four.
  // Memory Usage: 35.4 MB, less than 100.00% of JavaScript online submissions for Power of Four.
  // loop solution
  // if (num === 0) return false;
  // if (num === 1) return true;

  // let result = 1;
  // for (; result < num;) {
  //   result *= 4;
  //   if (result === num) return true;
  // }

  // return false;

  // No loop solution
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log
  return Number.isInteger(Math.log(num) / Math.log(4));
};