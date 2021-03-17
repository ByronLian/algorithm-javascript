// https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/
// Runtime: 72 ms, faster than 94.11% of JavaScript online submissions for Check If Two String Arrays are Equivalent.
// Memory Usage: 38.7 MB, less than 51.07% of JavaScript online submissions for Check If Two String Arrays are Equivalent.

/*
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */

var arrayStringsAreEqual = function (word1, word2) {
  return word1.join("") === word2.join("");
};
