// https://leetcode.com/problems/shortest-word-distance-iii/

/*
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

var shortestWordDistance = function (wordsDict, word1, word2) {
  if (word1 === word2) return getShortestDistanceForSameWords(wordsDict, word1);
  return getShortestDistanceForDifferentWords(wordsDict, word1, word2);
};

const getShortestDistanceForSameWords = (wordsDict, word) => {
  let idx = wordsDict.indexOf(word);
  let min = Infinity;

  for (let i = idx + 1; i < wordsDict.length; i++) {
    if (wordsDict[i] !== word) continue;
    min = Math.min(min, Math.abs(idx - i));
    idx = i;
  }

  return min;
};

const getShortestDistanceForDifferentWords = (wordsDict, word1, word2) => {
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
