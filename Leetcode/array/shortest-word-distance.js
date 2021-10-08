// https://leetcode.com/problems/shortest-word-distance/
// Runtime: 64 ms, faster than 98.45% of JavaScript online submissions for Shortest Word Distance.
// Memory Usage: 40.4 MB, less than 18.13% of JavaScript online submissions for Shortest Word Distance.

/*
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

var shortestDistance = function (wordsDict, word1, word2) {
  let word1Idx = -1;
  let word2Idx = -1;
  let min = Infinity;

  wordsDict.forEach((word, i) => {
    if (word === word1) word1Idx = i;
    if (word === word2) word2Idx = i;

    if (word === word1 || word === word2) {
      if (word1Idx !== -1 && word2Idx !== -1) {
        min = Math.min(min, Math.abs(word1Idx - word2Idx));
      }
    }
  });

  return min;
};
