// https://leetcode.com/number-of-good-pairs/
// Runtime: 84 ms, faster than 48.13% of JavaScript online submissions for Number of Good Pairs.
// Memory Usage: 36.7 MB, less than 22.06% of JavaScript online submissions for Number of Good Pairs.

/*
 * @param {number[]} nums
 * @return {number}
 */

var numIdenticalPairs = function (nums) {

  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] === nums[j]) count++;
    }
  }

  return count;
};