// https://leetcode.com/problems/next-greater-element-i/
// Runtime: 56 ms, faster than 91.07% of JavaScript online submissions for Next Greater Element I.
// Memory Usage: 35.3 MB, less than 100.00% of JavaScript online submissions for Next Greater Element I.
//

/*
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let result = [];

  let i = 0;
  while (i < nums1.length) {
    const pos = nums2.indexOf(nums1[i]);
    for (let j = pos; j < nums2.length; j++) {
      if (nums2[j] > nums1[i]) {
        result.push(nums2[j]);
        break;
      }
      if (j === nums2.length - 1) result.push(-1);
    }
    i++;
  }

  return result;
};