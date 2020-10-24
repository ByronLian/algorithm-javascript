// https://leetcode.com/problems/largest-number-at-least-twice-of-others/
// Runtime: 72 ms, faster than 93.10% of JavaScript online submissions for Largest Number At Least Twice of Others.
// Memory Usage: 38.6 MB, less than 9.81% of JavaScript online submissions for Largest Number At Least Twice of Others.

/*
 * @param {number[]} nums
 * @return {number}
 */

var dominantIndex = function (nums) {
  let max = -Infinity;
  let maxIdx = -1;
  let second = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];

    if (val > second) {
      if (val > max) {
        second = max;
        maxIdx = i;
        max = val;
      } else {
        second = val;
      }
    }
  }

  return second * 2 <= max ? maxIdx : -1;
};