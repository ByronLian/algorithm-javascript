// https://leetcode.com/problems/intersection-of-two-arrays-ii/
// Runtime: 52 ms, faster than 95.20% of JavaScript online submissions for Intersection of Two Arrays II.
// Memory Usage: 33.9 MB, less than 96.30% of JavaScript online submissions for Intersection of Two Arrays II.

/*
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersect = function (nums1, nums2) {
  // keyArr is the shorter array
  // compareArr is the longer array
  let result = [];
  let keyArr = nums1;
  let compareArr = nums2;

  if (nums1.length > nums2.length) {
    keyArr = nums2;
    compareArr = nums1;
  }

  // use short array element to check if it exists in long array or not
  // if we found, then push to result and remove from long array
  for (let i = 0; i < keyArr.length; i++) {
    const pos = compareArr.indexOf(keyArr[i]);
    if (pos !== -1) {
      result.push(keyArr[i]);
      compareArr.splice(pos, 1);
    }
  }

  return result;
};