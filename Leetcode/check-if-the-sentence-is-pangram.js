// https://leetcode.com/problems/check-if-the-sentence-is-pangram/
// Runtime: 76 ms, faster than 92.01% of JavaScript online submissions for Check if the Sentence Is Pangram.
// Memory Usage: 39.6 MB, less than 39.04% of JavaScript online submissions for Check if the Sentence Is Pangram.

/*
 * @param {string} sentence
 * @return {boolean}
 */

var checkIfPangram = function (sentence) {
  const len = sentence.length;
  const PANGRAM_COUNT = 26;

  if (len < PANGRAM_COUNT) return false;

  let count = 0;
  let store = new Map();

  for (let i = 0; i < len; i++) {
    if (count === PANGRAM_COUNT) break;

    if (store[sentence[i]] === undefined) {
      store[sentence[i]] = 1;
      count += 1;
    } else {
      store[sentence[i]] += 1;
    }
  }

  return count === PANGRAM_COUNT;
};