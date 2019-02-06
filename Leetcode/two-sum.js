// https://leetcode.com/problems/two-sum/
// Runtime: 68 ms, faster than 100.00% of JavaScript online submissions for Two Sum.
// Memory Usage: 16 MB, less than 15.43% of JavaScript online submissions for Two Sum.

/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Solution
// use a object hash to record data and data index
//
// e.g.
// nums: [2, 5, 7, 11]
// target: 9
//
// loop 1: 9-2 = 7, hash ={}, not found so continue
// loop 2: 9-5 = 4, hash ={2:0}, not found so continue
// loop 3: 9-7 = 2, hash ={2:0, 5:1}, found "2" so return [0, 2]

var twoSum = function (nums, target) {
  let hash = {};
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    if (target - nums[i] in hash) return [hash[target - nums[i]], i];
    hash[nums[i]] = i;
  }

  return [-1, -1]; // Can't find match
};