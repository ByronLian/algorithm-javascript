// https://leetcode.com/problems/single-number-iii/

/*
 * @param {number[]} nums
 * @return {number[]}
 */

var singleNumber = function (nums) {
  // TODO: bitmask
  const result = [];
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map?.[nums[i]]) {
      map[nums[i]] += 1;
    } else {
      map[nums[i]] = 1;
    }
  }

  for (let j in map) {
    if (map[j] === 1) result.push(j);
  }

  return result;
};