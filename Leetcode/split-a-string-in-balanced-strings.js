// https://leetcode.com/problems/split-a-string-in-balanced-strings/
// Runtime: 68 ms, faster than 84.52% of JavaScript online submissions for Split a String in Balanced Strings.
// Memory Usage: 36.5 MB, less than 31.96% of JavaScript online submissions for Split a String in Balanced Strings.

/*
 * @param {string} s
 * @return {number}
 */

var balancedStringSplit = function (s) {
  let temp = 0;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") {
      temp++;
    } else {
      temp--;
    }
    // When temp equals 0 means we find same number of R and L
    // so we can count them as 1 group
    if (temp === 0) count++;
  }

  return count;
};
