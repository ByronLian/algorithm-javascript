// https://leetcode.com/problems/string-matching-in-an-array/
// Runtime: 80 ms, faster than 69.92% of JavaScript online submissions for String Matching in an Array.
// Memory Usage: 37.1 MB, less than 23.05% of JavaScript online submissions for String Matching in an Array.

/*
 * @param {string[]} words
 * @return {string[]}
 */

var stringMatching = function (words) {
  words.sort((a, b) => a.length - b.length);

  let result = [];
  let i = 0;
  while (i < words.length) {
    for (let j = i + 1; j < words.length; j++) {
      if (words[j].indexOf(words[i]) !== -1) {
        result.push(words[i]);
        break;
      }
    }

    i++;
  }


  return result;
};
