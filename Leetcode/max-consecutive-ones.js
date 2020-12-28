// https://leetcode.com/problems/max-consecutive-ones/
// Runtime: 80 ms, faster than 93.08% of JavaScript online submissions for Max Consecutive Ones.
// Memory Usage: 40.9 MB, less than 94.22% of JavaScript online submissions for Max Consecutive Ones.

/*
 * @param {number[]} nums
 * @return {number}
 */

var findMaxConsecutiveOnes = function (nums) {
  let max = 0;
  let currentCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      if (currentCount > max) max = currentCount;
      currentCount = 0;
    } else {
      currentCount++;
    }
  }

  return currentCount > max ? currentCount : max;
};
