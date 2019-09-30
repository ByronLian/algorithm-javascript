// https://leetcode.com/problems/merge-sorted-array/
// Runtime: 52 ms, faster than 86.24% of JavaScript online submissions for Merge Sorted Array.
// Memory Usage: 34.9 MB, less than 15.38% of JavaScript online submissions for Merge Sorted Array.

/*
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function (nums1, m, nums2, n) {
  // Add nums2 element into nums1
  for (let i = 0; i < nums2.length; i++) {
    nums1[m + i] = nums2[i];
  }

  // Re-sort
  nums1.sort((a, b) => a - b);

};