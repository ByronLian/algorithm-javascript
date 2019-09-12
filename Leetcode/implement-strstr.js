// https://leetcode.com/problems/implement-strstr/
// Runtime: 52 ms, faster than 84.54% of JavaScript online submissions for Implement strStr().
// Memory Usage: 35.9 MB, less than 25.00% of JavaScript online submissions for Implement strStr().

/*
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

var strStr = function (haystack, needle) {

  if (needle === '') return 0;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack.substring(i, needle.length + i) === needle) return i;
  }

  return -1;
};
