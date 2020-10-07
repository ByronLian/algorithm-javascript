// https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/
// Runtime: 76 ms, faster than 61.11% of JavaScript online submissions for Check If a Word Occurs As a Prefix of Any Word in a Sentence.
// Memory Usage: 38.6 MB, less than 5.55% of JavaScript online submissions for Check If a Word Occurs As a Prefix of Any Word in a Sentence.

/*
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */

var isPrefixOfWord = function (sentence, searchWord) {
  let countSpace = 1;

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') countSpace++;

    if ((sentence[i - 1] === ' ' || i === 0) && searchWord[0] === sentence[i]) {
      if (sentence.substring(i, i + searchWord.length) === searchWord) return countSpace;
    }
  }

  return -1;
};