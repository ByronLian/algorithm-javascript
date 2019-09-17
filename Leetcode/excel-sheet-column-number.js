// https://leetcode.com/problems/excel-sheet-column-number/
// Runtime: 64 ms, faster than 91.68% of JavaScript online submissions for Excel Sheet Column Number.
// Memory Usage: 34.8 MB, less than 86.67% of JavaScript online submissions for Excel Sheet Column Number.

/*
 * @param {string} s
 * @return {number}
 */

var titleToNumber = function (s) {
  const mapping = {
    'A': 1,
    'B': 2,
    'C': 3,
    'D': 4,
    'E': 5,
    'F': 6,
    'G': 7,
    'H': 8,
    'I': 9,
    'J': 10,
    'K': 11,
    'L': 12,
    'M': 13,
    'N': 14,
    'O': 15,
    'P': 16,
    'Q': 17,
    'R': 18,
    'S': 19,
    'T': 20,
    'U': 21,
    'V': 22,
    'W': 23,
    'X': 24,
    'Y': 25,
    'Z': 26
  }

  if (s.length === 1) return mapping[s[0]];

  let result = 0;
  let exp = 0;

  // e.g 'ABC'
  // Deal with 'C' and then 'B' and then 'A'
  for (let i = s.length - 1; i >= 0; i--) {
    let value = Math.pow(26, exp++) * mapping[s[i]];
    result += value;
  }

  return result;
};
