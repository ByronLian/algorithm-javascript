// https://leetcode.com/problems/longest-common-prefix/
// Runtime: 44 ms, faster than 99.46% of JavaScript online submissions for Longest Common Prefix.
// Memory Usage: 35.3 MB, less than 25.00% of JavaScript online submissions for Longest Common Prefix.

/*
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function (strs) {

  if (strs.length === 0) return '';
  if (strs.length === 1) return strs[0];

  // Sorting from shortest length word to longest one
  const newArr = strs.sort(function (a, b) {
    return a.length - b.length;
  });

  // Using shortest word to check the prefix
  for (let i = 0; i < newArr[0].length; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (newArr[0][i] !== strs[j][i])
        // Once we found the first non match then we return result
        return newArr[0].substring(0, i);
    }
  }

  return newArr[0];
};