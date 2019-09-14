// https://leetcode.com/problems/valid-palindrome/
// Runtime: 60 ms, faster than 96.50% of JavaScript online submissions for Valid Palindrome.
// Memory Usage: 37.5 MB, less than 47.83% of JavaScript online submissions for Valid Palindrome.

/*
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function (s) {
  // Replace alphanumeric and turn uppercase to lowercase
  const newStr = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
  const len = newStr.length;

  if (len === 1) return true;

  // Check if left element equals right element
  // e.g newStr = 'abccba'
  // loop 1: check newStr[0] and newStr[5]
  // loop 2: check newStr[1] and newStr[4]
  // ... return false if we found no match
  for (let i = 0; i < len; i++) {
    if (newStr[i] !== newStr[len - i - 1]) return false;
  }

  return true;
}; 