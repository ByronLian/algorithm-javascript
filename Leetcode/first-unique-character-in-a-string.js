// https://leetcode.com/problems/first-unique-character-in-a-string/
// Runtime: 104 ms, faster than 88.67% of JavaScript online submissions for First Unique Character in a String.
// Memory Usage: 40.1 MB, less than 57.52% of JavaScript online submissions for First Unique Character in a String.

/*
 * @param {string} s
 * @return {number}
 */

var firstUniqChar = function (s) {
  let map = {};

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      map[s[i]] += 1;
    } else {
      map[s[i]] = 1;
    }
  }

  for (let item in map) {
    if (map[item] === 1) return s.indexOf(item);
  }

  return -1;
};
