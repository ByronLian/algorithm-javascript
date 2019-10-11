// https://leetcode.com/problems/zigzag-conversion/
// Runtime: 72 ms, faster than 98.89% of JavaScript online submissions for ZigZag Conversion.
// Memory Usage: 38.6 MB, less than 88.89% of JavaScript online submissions for ZigZag Conversion.

/*
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

var convert = function (s, numRows) {

  if (s.length < numRows || numRows < 2 || s.length < 2) return s;

  let result = '';
  // Loop over rows
  for (let i = 0; i < numRows; i++) {
    for (let j = i; j < s.length; j += 2 * (numRows - 1)) {
      result += s[j];
      if (i !== 0 && i < numRows - 1) {
        const intermediateIdx = j + 2 * (numRows - i - 1);
        if (s[intermediateIdx]) result += s[intermediateIdx];
      }
    }
  }
  return result;
};
