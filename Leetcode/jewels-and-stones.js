// https://leetcode.com/problems/jewels-and-stones/
// Runtime: 72 ms, faster than 93.22% of JavaScript online submissions for Jewels and Stones.
// Memory Usage: 39.8 MB, less than 6.89% of JavaScript online submissions for Jewels and Stones.

/*
 * @param {string} J
 * @param {string} S
 * @return {number}
 */

var numJewelsInStones = function (J, S) {
  let sLen = S.length;
  if (sLen < 1) return 0;
  let count = 0;
  let map = {};

  for (let i = 0; i < sLen; i++) {
    if (map[S[i]] === undefined) {
      map[S[i]] = 1;
    } else {
      map[S[i]] += 1;
    }
  }

  for (let j = 0; j < J.length; j++) {
    if (map[J[j]] >= 1) count += map[J[j]];
  }

  return count;
};
