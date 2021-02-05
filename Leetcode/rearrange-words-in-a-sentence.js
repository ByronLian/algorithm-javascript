// https://leetcode.com/problems/rearrange-words-in-a-sentence/
// Runtime: 88 ms, faster than 93.22% of JavaScript online submissions for Rearrange Words in a Sentence.
// Memory Usage: 42.8 MB, less than 61.02% of JavaScript online submissions for Rearrange Words in a Sentence.

/*
 * @param {string} text
 * @return {string}
 */

var arrangeWords = function (text) {
  const textArr = text.toLowerCase().split(" ");
  // Stable sort
  textArr.sort((a, b) => a.length - b.length);

  const tempResult = textArr.join(" ");
  const result =
    String.fromCharCode(tempResult[0].charCodeAt(0) - 32) +
    tempResult.substring(1, tempResult.length);

  return result;
};
