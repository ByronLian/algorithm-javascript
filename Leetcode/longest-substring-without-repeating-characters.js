// https://leetcode.com/problems/longest-substring-without-repeating-characters

/*
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
  const len = s.length;
  const store = {};
  let max = 0;

  let i = 0;
  let j = 0;
  while (j < len) {
    if (store[s[j]] !== undefined) {
      i = Math.max(store[s[j]], i);
    }
    max = Math.max(max, j - i + 1);
    store[s[j]] = j + 1;

    j++;
  }
  return max;
};
