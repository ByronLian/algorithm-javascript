// https://leetcode.com/problems/array-partition-i/
// Runtime: 112 ms, faster than 96.57% of JavaScript online submissions for Array Partition I.
// Memory Usage: 41.7 MB, less than 37.91% of JavaScript online submissions for Array Partition I.

/*
 * @param {number[]} nums
 * @return {number}
 */

var arrayPairSum = function (nums) {
  nums.sort((a, b) => a - b);

  let result = 0;
  for (let i = 0; i < nums.length; i += 2) {
    result += Math.min(nums[i], nums[i + 1]);
  }

  return result;
};

