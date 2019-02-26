// https://leetcode.com/problems/kth-largest-element-in-an-array/
// Runtime: 72 ms, faster than 82.99% of JavaScript online submissions for Kth Largest Element in an Array.
// Memory Usage: 36.1 MB, less than 43.48% of JavaScript online submissions for Kth Largest Element in an Array.

/*
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {

  nums.sort(function (a, b) {
    return b - a;
  });

  return nums[k - 1];
  
};