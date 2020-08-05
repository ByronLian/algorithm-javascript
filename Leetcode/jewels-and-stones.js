// https://leetcode.com/jewels-and-stones/
// Runtime: 80 ms, faster than 53.24% of JavaScript online submissions for Jewels and Stones.
// Memory Usage: 36.8 MB, less than 17.45% of JavaScript online submissions for Jewels and Stones.

/*
 * @param {string} J
 * @param {string} S
 * @return {number}
 */

var numJewelsInStones = function (J, S) {

  let currentLen = S.length;
  if (currentLen < 1) return 0;
  let count = 0;

  for (let i = 0; i < J.length; i++) {
    S = S.split(J[i]).join('');
    count += currentLen - S.length;
    currentLen = S.length;
  }

  return count;
};