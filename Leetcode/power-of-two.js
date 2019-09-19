// https://leetcode.com/problems/power-of-two/ 
// Runtime: 64 ms, faster than 93.14% of JavaScript online submissions for Power of Two.
// Memory Usage: 35.5 MB, less than 46.15% of JavaScript online submissions for Power of Two.

/*
 * @param {number} n
 * @return {boolean}
 */

var isPowerOfTwo = function (n) {
  if (n === 0) return false;
  if (n === 1) return true;

  let result = 1;
  for (; result < n;) {
    result *= 2;
    if (result === n) return true;
  }

  return false;
};
