// https://leetcode.com/problems/intersection-of-two-arrays/
// Runtime: 52 ms, faster than 91.79% of JavaScript online submissions for Intersection of Two Arrays.
// Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions for Intersection of Two Arrays.

/*
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersection = function (nums1, nums2) {
  let len = nums2.length;
  let keyArr = nums1;
  let compareArr = nums2;
  let result = [];

  // Shorter array will be key array
  // Longer array will be compare array 
  if (nums1.length > nums2.length) {
    len = nums1.length;
    keyArr = nums2;
    compareArr = nums1;
  }

  for (let i = 0; i < len; i++) {
    if (compareArr.indexOf(keyArr[i]) !== -1 && result.indexOf(keyArr[i]) === -1) {
      result.push(keyArr[i]);
    }
  }

  return result;
};