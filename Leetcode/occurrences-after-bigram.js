//
// https://leetcode.com/problems/occurrences-after-bigram/
// Runtime: 64 ms, faster than 96.69% of JavaScript online submissions for Occurrences After Bigram.
// Memory Usage: 38.4 MB, less than 19.21% of JavaScript online submissions for Occurrences After Bigram.

/*
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */

var findOcurrences = function (text, first, second) {
  let textArr = text.split(' ');
  let result = [];

  let i = 0;
  let count = 0; // Use to check which word should be compared now
  while (i < textArr.length - 1) {
    const current = textArr[i];
    // If current equals first word
    if (count === 0 && current === first) {
      count = 1;
      // If current equals second word
    } else if (count === 1 && current === second) {
      count = 0;
      result.push(textArr[i + 1]);
    } else {
      count = 0;
    }

    // Case that current and previous are both equals first word
    if (current === first && current === textArr[i - 1]) count = 1;
    i++;
  }

  return result;
};