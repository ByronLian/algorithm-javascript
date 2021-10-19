// https://leetcode.com/problems/sorting-the-sentence
// Runtime: 68 ms, faster than 85.87% of JavaScript online submissions for Sorting the Sentence.
// Memory Usage: 38.9 MB, less than 26.33% of JavaScript online submissions for Sorting the Sentence.

/*
 * @param {string} s
 * @return {string}
 */

var sortSentence = function (s) {
  const withIdxLetters = s.split(' ');
  const letters = [];

  for (let i = 0; i < withIdxLetters.length; i++) {
    letters[withIdxLetters[i].match(/\d+/g) - 1] = withIdxLetters[i].match(/\D+/g);
  }

  return letters.join(' ');
};