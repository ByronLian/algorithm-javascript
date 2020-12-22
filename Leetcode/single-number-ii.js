// https://leetcode.com/problems/single-number-ii/
// Runtime: 76 ms, faster than 94.37% of JavaScript online submissions for Single Number II.
// Memory Usage: 40.5 MB, less than 51.52% of JavaScript online submissions for Single Number II.

/*
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function (nums) {
  let map = new Map();

  for (let i = 0; i < nums.length; i += 1) {
    if (map[nums[i]] === undefined) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]] += 1;
    }
  }

  for (let j in map) {
    if (map[j] === 1) return j;
  }
};
