// https://leetcode.com/problems/string-to-integer-atoi/
// Runtime: 76 ms, faster than 70.50% of JavaScript online submissions for String to Integer (atoi).
// Memory Usage: 36.3 MB, less than 42.86% of JavaScript online submissions for String to Integer (atoi).

/*
 * @param {string} str
 * @return {number}
 */

var myAtoi = function (str) {
  const MIN_VALUE = - Math.pow(2, 31);
  const MAX_VALUE = -MIN_VALUE - 1;

  if (str.length === 0) return 0;

  // Find first non space position
  let nonSpaceIdx = -1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      nonSpaceIdx = i;
      break;
    }
  }

  // If every thing is space
  if (nonSpaceIdx === -1) return 0;

  const startIdx = str[nonSpaceIdx] === '-' || str[nonSpaceIdx] === '+' ? nonSpaceIdx + 1 : nonSpaceIdx;

  let result = '';
  for (let j = startIdx; j < str.length; j++) {
    if (str[j].charCodeAt(0) >= 48 && str[j].charCodeAt(0) <= 57) {
      result += str[j];
    } else {
      break;
    }
  }

  // If there's no number after first non space char
  if (result.length === 0) return 0;

  // Add '-' or '+' back into result
  if (startIdx > nonSpaceIdx) result = str[nonSpaceIdx] + result;

  if (result > MAX_VALUE) return MAX_VALUE;
  if (result < MIN_VALUE) return MIN_VALUE;

  return result;
};
