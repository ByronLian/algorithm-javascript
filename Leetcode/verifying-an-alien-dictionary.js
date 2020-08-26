// https://leetcode.com/problems/verifying-an-alien-dictionary/
// Runtime: 76 ms, faster than 69.72% of JavaScript online submissions for Verifying an Alien Dictionary.
// Memory Usage: 39.1 MB, less than 5.71% of JavaScript online submissions for Verifying an Alien Dictionary.

/*
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */

var isAlienSorted = function (words, order) {
  let map = {};
  for (let i = 0; i < order.length; i++) {
    map[order[i]] = i;
  }

  for (let j = 0; j < words.length - 1; j++) {
    let smaller =
      words[j].length > words[j + 1].length
        ? words[j + 1].length
        : words[j].length;

    for (let k = 0; k < smaller; k++) {
      if (words[j][k] !== words[j + 1][k]) {
        // Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
        if (map[words[j][k]] > map[words[j + 1][k]]) return false;
        break;
      }

      // Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
      if (map[words[j][k]] > map[words[j + 1][k]]) return false;
      // Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
      if (k === smaller - 1 && words[j].length > words[j + 1].length)
        return false;
    }
  }

  return true;
};
