// https://leetcode.com/problems/merge-strings-alternately/
// Runtime: 68 ms, faster than 100.00% of JavaScript online submissions for Merge Strings Alternately.
// Memory Usage: 38.7 MB, less than 100.00% of JavaScript online submissions for Merge Strings Alternately.

/*
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

var mergeAlternately = function (word1, word2) {
  let i = 0;
  let result = "";

  while (word1[i] || word2[i]) {
    if (word1[i] && word2[i]) {
      result += word1[i] + word2[i];
    } else {
      // Case when word2's length longer than word1
      if (!word1[i] && word2[i]) {
        result += word2.substring(i, word2.length);
        break;
      }
      // Case when word1's length longer than word2
      if (word1[i] && !word2[i]) {
        result += word1.substring(i, word1.length);
        break;
      }
    }
    i++;
  }

  return result;
};
