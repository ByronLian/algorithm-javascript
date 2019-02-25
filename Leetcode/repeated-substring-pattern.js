// https://leetcode.com/problems/repeated-substring-pattern/
// Runtime: 100 ms, faster than 44.09% of JavaScript online submissions for Repeated Substring Pattern.
// Memory Usage: 42.1 MB, less than 26.92% of JavaScript online submissions for Repeated Substring Pattern.

/*
 * @param {string} s
 * @return {boolean}
 */

var repeatedSubstringPattern = function (s) {
  const len = s.length;
  if (len === 1) return false;

  // Solution
  // The idea is repeat current substring and compare with s
  //
  // e.g s = "abab"
  // loop1: currentSubstring = "a", currentSubstring repeat = "aaaa", not equals s
  // loop2" currentSubstring = "ab", currentSubstring repeat = "abab" equals s
  
  let currentSubstring = '';

  for (let i = 0; i < len; i++) {
    currentSubstring += s[i];
    const currentSubstringLen = currentSubstring.length;

    if (currentSubstring.repeat(len / currentSubstringLen) === s) return true;
    if (currentSubstringLen * 2 >= len) return false;
  }
};