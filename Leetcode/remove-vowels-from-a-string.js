// https://leetcode.com/problems/remove-vowels-from-a-string/
// Runtime: 72 ms, faster than 82.18% of JavaScript online submissions for Remove Vowels from a String.
// Memory Usage: 37.9 MB, less than 32.55% of JavaScript online submissions for Remove Vowels from a String.

/*
 * @param {string} S
 * @return {string}
 */

var removeVowels = function (S) {
  let result = "";

  for (let i = 0; i < S.length; i++) {
    switch (S[i]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        continue;
      default:
        result += S[i];
    }
  }

  return result;
};
