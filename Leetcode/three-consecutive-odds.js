// https://leetcode.com/problems/three-consecutive-odds/
// Runtime: 68 ms, faster than 93.83% of JavaScript online submissions for Three Consecutive Odds.
// Memory Usage: 37 MB, less than 12.66% of JavaScript online submissions for Three Consecutive Odds.

/*
 * @param {number[]} arr
 * @return {boolean}
 */

var threeConsecutiveOdds = function (arr) {
  if (arr.length < 3) return false;

  let count = 0;
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (result.length === 3) return true;
    if (arr[i] % 2 !== 0) {
      result.push(arr[i]);
      count++;
    } else {
      result = [];
      count = 0;
    }
  }

  return result.length === 3 ? true : false;
};
