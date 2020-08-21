// https://leetcode.com/problems/find-and-replace-pattern/
// Runtime: 104 ms, faster than 28.93% of JavaScript online submissions for Find and Replace Pattern.
// Memory Usage: 42.9 MB, less than 5.79% of JavaScript online submissions for Find and Replace Pattern.

/*
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
  let map = {};
  let map2 = {};
  let result = [];

  for (let i = 0; i < words.length; i++) {
    let flag = true;

    for (let j = 0; j < words[i].length; j++) {
      if (Object.keys(map).length === 0) {
        map[pattern[j]] = words[i][j];
        map2[words[i][j]] = pattern[j];
      } else if (map[pattern[j]] || map2[words[i][j]]) {
        if (map[pattern[j]] !== words[i][j] && map2[words[i][j]] !== pattern[j]) {
          flag = false;
          break;
        }
      } else {
        map[pattern[j]] = words[i][j];
        map2[words[i][j]] = pattern[j];
      }
    }

    if (flag) result.push(words[i]);
    map = {};
    map2 = {};
  }

  return result;
};
