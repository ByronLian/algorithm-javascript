// https://leetcode.com/problems/power-of-three/ 
// Runtime: 200 ms, faster than 89.30% of JavaScript online submissions for Power of Three.
// Memory Usage: 48.1 MB, less than 30.00% of JavaScript online submissions for Power of Three.

/*
 * @param {number} n
 * @return {boolean}
 */

var isPowerOfThree = function (n) {
  if (n === 0) return false;
  if (n === 1) return true;

  let result = 1;
  for (; result < n;) {
    result *= 3;
    if (result === n) return true;
  }

  return false;
};
