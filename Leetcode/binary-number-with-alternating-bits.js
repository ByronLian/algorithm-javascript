// https://leetcode.com/problems/binary-number-with-alternating-bits/
// Runtime: 76 ms, faster than 71.11% of JavaScript online submissions for Binary Number with Alternating Bits.
// Memory Usage: 37.1 MB, less than 6.67% of JavaScript online submissions for Binary Number with Alternating Bits.

/*
 * @param {number} n
 * @return {boolean}
 */

var hasAlternatingBits = function (n) {
  let bin = n.toString(2);

  for (let i = 0; i < bin.length; i++) {
    if (bin[i] === bin[i + 1]) return false;
  }

  return true;
};
