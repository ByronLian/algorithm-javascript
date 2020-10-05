// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
// Runtime: 108 ms, faster than 89.33% of JavaScript online submissions for Find All Numbers Disappeared in an Array.
// Memory Usage: 49.8 MB, less than 20.00% of JavaScript online submissions for Find All Numbers Disappeared in an Array.

/*
 * @param {number[]} nums
 * @return {number[]}
 */

var findDisappearedNumbers = function (nums) {
  // nums: [4,3,2,7,8,2,3,1]

  // [0,1,2,3,4,5,6,7,8]
  let result = [...Array(nums.length + 1)].map((_, i) => i);
  // [0,0,0,0,0,5,6,0,0]
  nums.forEach((x) => (result[x] = 0));

  return result.filter((x) => x > 0);
};
