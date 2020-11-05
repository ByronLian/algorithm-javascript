// https://leetcode.com/problems/index-pairs-of-a-string/
// Runtime: 76 ms, faster than 88.73% of JavaScript online submissions for Index Pairs of a String.
// Memory Usage: 40.1 MB, less than 5.63% of JavaScript online submissions for Index Pairs of a String.

/*
 * @param {string} text
 * @param {string[]} words
 * @return {number[][]}
 */

var indexPairs = function (text, words) {
  let result = [];

  let i = 0;
  while (i < words.length) {
    const word = words[i];
    const wordLen = word.length;

    for (let j = 0; j < text.length; j++) {
      if (word[0] === text[j]) {
        const tmp = text.substring(j, j + wordLen);
        if (tmp === word) result.push([j, j + wordLen - 1]);
      }
    }

    i++;
  }

  return result.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
};
