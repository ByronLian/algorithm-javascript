// https://leetcode.com/problems/longest-word-in-dictionary/
// Runtime: 120 ms, faster than 76.79% of JavaScript online submissions for Longest Word in Dictionary.
// Memory Usage: 42.8 MB, less than 69.62% of JavaScript online submissions for Longest Word in Dictionary.

/*
 * @param {string[]} words
 * @return {string}
 */

var longestWord = function (words) {
  words.sort((a, b) => b.length - a.length || a.localeCompare(b));
  let candidates = [];
  let map = {};

  for (let i = 0; i < words.length; i++) {
    // Enhancement speed
    if (map[words[i].slice(0, -1)] !== 1 && candidates.length !== 0) break;

    let temp = "";
    for (let j = 0; j < words[i].length; j++) {
      temp += words[i][j];
      if (words.indexOf(temp) === -1) {
        temp = "";
        break;
      }
    }

    if (temp !== "") {
      candidates.push(temp);
      map[temp.slice(0, -1)] = 1;
    }
  }

  return candidates.length === 0 ? "" : candidates[0];
};
