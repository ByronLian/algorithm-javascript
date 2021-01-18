// https://leetcode.com/problems/count-the-number-of-consistent-strings/
// Runtime: 112 ms, faster than 87.00% of JavaScript online submissions for Count the Number of Consistent Strings.
// Memory Usage: 47.6 MB, less than 88.89% of JavaScript online submissions for Count the Number of Consistent Strings.

/*
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */

var countConsistentStrings = function (allowed, words) {
  let result = 0;

  for (let i = 0; i < words.length; i++) {
    let counter = 0;

    while (counter < words[i].length) {
      if (!allowed.includes(words[i][counter])) break;
      counter++;
    }
    if (counter === words[i].length) result++;
  }

  return result;
};
