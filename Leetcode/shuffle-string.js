// https://leetcode.com/problems/shuffle-string/
// Runtime: 80 ms, faster than 94.83% of JavaScript online submissions for Shuffle String.
// Memory Usage: 38.4 MB, less than 44.52% of JavaScript online submissions for Shuffle String.

/*
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  let result = ''

  for (let i = 0; i < s.length; i++) {
    const idx = indices.indexOf(i);
    result += s[idx];
  }

  return result;
};