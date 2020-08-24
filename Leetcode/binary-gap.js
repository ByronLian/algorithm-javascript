// https://leetcode.com/problems/binary-gap/
// Runtime: 76 ms, faster than 79.70% of JavaScript online submissions for Binary Gap.
// Memory Usage: 36.7 MB, less than 48.12% of JavaScript online submissions for Binary Gap.

/*
 * @param {number} N
 * @return {number}
 */
var binaryGap = function (N) {
  let binary = N.toString(2);

  let max = 0;
  let currIdx = -1;

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === '1' && currIdx === -1) currIdx = i;
    if (binary[i] === '1' && i > currIdx) {
      if (i - currIdx > max) max = i - currIdx;
      currIdx = i;
    }
  }

  return max;
};