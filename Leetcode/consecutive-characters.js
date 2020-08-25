// https://leetcode.com/problems/consecutive-characters/
// Runtime: 80 ms, faster than 79.23% of JavaScript online submissions for Consecutive Characters.
// Memory Usage: 38 MB, less than 26.16% of JavaScript online submissions for Consecutive Characters.

/*
 * @param {string} s
 * @return {number}
 */

var maxPower = function (s) {
  if (s.length === 1) return 1;

  let max = 0;
  let count = 1;

  for (let i = 0; i < s.length; i++) {
    if (s[i + 1] === s[i]) {
      count++;
    } else {
      if (count > max) max = count;
      count = 1;
    }
  }

  return max;
};
