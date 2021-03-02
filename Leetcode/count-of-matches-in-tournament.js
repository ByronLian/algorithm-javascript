// https://leetcode.com/problems/count-of-matches-in-tournament/
// Runtime: 76 ms, faster than 83.98% of JavaScript online submissions for Count of Matches in Tournament.
// Memory Usage: 38.8 MB, less than 19.98% of JavaScript online submissions for Count of Matches in Tournament.

/*
 * @param {number} n
 * @return {number}
 */

var numberOfMatches = function (n) {
  let result = 0;
  let temp = 0;

  while (true) {
    if (n === 1) break;
    temp = Math.round(n / 2);
    result += n - temp;
    n = temp;
  }

  return result;
};
