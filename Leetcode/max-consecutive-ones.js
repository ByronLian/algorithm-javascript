// https://leetcode.com/problems/max-consecutive-ones/
// Runtime: 84 ms, faster than 67.11% of JavaScript online submissions for Max Consecutive Ones.
// Memory Usage: 43.5 MB, less than 5.01% of JavaScript online submissions for Max Consecutive Ones.

/*
 * @param {number[]} nums
 * @return {number}
 */

var findMaxConsecutiveOnes = function (nums) {
  let has1 = nums.filter((x) => x === 1).length;
  if (has1 === 0) return 0;

  let numsArr = nums.join("").split("0");
  let max = 0;

  for (let i = 0; i < numsArr.length; i++) {
    if (numsArr[i] > max) max = numsArr[i];
  }

  return max.toString().length;
};
