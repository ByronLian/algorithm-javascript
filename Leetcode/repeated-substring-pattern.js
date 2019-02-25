// https://leetcode.com/problems/repeated-substring-pattern/
// Runtime: 80 ms, faster than 64.57% of JavaScript online submissions for Repeated Substring Pattern.
// Memory Usage: 37.7 MB, less than 69.23% of JavaScript online submissions for Repeated Substring Pattern.

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
  // loop1: currentSubstr = "a", currentSubstr repeat = "aaaa", not equals s
  // loop2" currentSubstr = "ab", currentSubstr repeat = "abab" equals s

  for (let i = 0; i < len; i++) {
    let currentSubstr = s.substring(0, i + 1);
    const currentSubstrLen = i + 1;

    if (currentSubstr.repeat(len / currentSubstrLen) === s) return true;
    if (currentSubstrLen * 2 >= len) return false;
  }
};