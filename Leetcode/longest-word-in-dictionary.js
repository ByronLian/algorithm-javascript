// https://leetcode.com/problems/longest-word-in-dictionary/
// Runtime: 92 ms, faster than 87.39% of JavaScript online submissions for Longest Word in Dictionary.
// Memory Usage: 44.2 MB, less than 51.26% of JavaScript online submissions for Longest Word in Dictionary.

/*
 * @param {string[]} words
 * @return {string}
 */

var longestWord = function (words) {
  words.sort((a, b) => b.length - a.length || a.localeCompare(b));

  for (let i = 0; i < words.length; i++) {
    let temp = "";
    for (let j = 0; j < words[i].length; j++) {
      temp += words[i][j];
      if (words.indexOf(temp) === -1) {
        temp = "";
        break;
      }
    }

    if (temp !== "") return temp;
  }

  return "";
};
