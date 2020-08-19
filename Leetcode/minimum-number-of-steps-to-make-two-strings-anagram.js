// https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/
// Runtime: 136 ms, faster than 87.37% of JavaScript online submissions for Minimum Number of Steps to Make Two Strings Anagram.
// Memory Usage: 43.1 MB, less than 49.48% of JavaScript online submissions for Minimum Number of Steps to Make Two Strings Anagram.

/*
 * @param {string} s
 * @param {string} t
 * @return {number}
 */

const minSteps = (s, t) => {
  let map = {};
  let ans = 0;

  // Add s elements into map
  for (let el of s) {
    if (!map[el]) map[el] = 0;
    map[el]++;
  }

  // Compare with map data
  // we need to change if there's no element or don't have enough same elements
  for (let el of t) {
    if (!map[el] || map[el]-- <= 0) ans++;
  }

  return ans;
};
