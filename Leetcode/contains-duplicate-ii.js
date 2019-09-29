// https://leetcode.com/problems/contains-duplicate-ii/
// Runtime: 68 ms, faster than 72.43% of JavaScript online submissions for Contains Duplicate II.
// Memory Usage: 42.3 MB, less than 36.84% of JavaScript online submissions for Contains Duplicate II.

/*
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

var containsNearbyDuplicate = function (nums, k) {

  let store = {};

  for (let i = 0; i < nums.length; i++) {
    const mapKey = nums[i];
    // Check if absolute difference less than k
    if (store[mapKey] !== 'undefined' && i - store[mapKey] <= k) return true;
    // Update or add element
    store[mapKey] = i;
  }

  return false;

};