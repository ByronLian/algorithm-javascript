// https://leetcode.com/problems/most-common-word/
// Runtime: 76 ms, faster than 93.14% of JavaScript online submissions for Most Common Word.
// Memory Usage: 39.5 MB, less than 5.94% of JavaScript online submissions for Most Common Word.

/*
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */

var mostCommonWord = function (paragraph, banned) {
  let store = {};
  let max = 0;
  let maxWord = "";

  let str = "";
  for (let i = 0; i < paragraph.length; i++) {
    const ascCode = paragraph[i].charCodeAt();

    // If it's english letter
    if ((ascCode >= 65 && ascCode <= 90) || (ascCode >= 97 && ascCode <= 122)) {
      str += ascCode >= 97 ? paragraph[i] : String.fromCharCode(ascCode + 32);
    } else {
      // If it's not in banned and not empty string
      if (banned.indexOf(str) === -1 && str !== "") {
        if (store[str] === undefined) {
          store[str] = 1;
        } else {
          store[str] += 1;
        }

        // Find current max
        if (store[str] > max) {
          max = store[str];
          maxWord = str;
        }
      }
      str = "";
    }
  }

  return maxWord === '' ? str : maxWord;
};
