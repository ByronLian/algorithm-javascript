// https://leetcode.com/problems/count-binary-substrings/
// Runtime: 84 ms, faster than 92.06% of JavaScript online submissions for Count Binary Substrings.
// Memory Usage: 47 MB, less than 6.35% of JavaScript online submissions for Count Binary Substrings.

/*
 * @param {string} s
 * @return {number}
 */

var countBinarySubstrings = function (s) {
  const zero = "0";
  const one = "1";
  let stackZero = [];
  let stackOne = [];
  let count = 0;
  let prev = s[0];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === zero) {
      if (prev !== zero) {
        stackZero = [];
        prev = zero;
      }
      stackZero.push(zero);
      if (stackOne.pop() === one) count++;
    } else {
      if (prev !== one) {
        stackOne = [];
        prev = one;
      }
      stackOne.push(one);
      if (stackZero.pop() === zero) count++;
    }
  }

  return count;
};
