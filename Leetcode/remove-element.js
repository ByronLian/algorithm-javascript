// https://leetcode.com/problems/remove-element/
// Runtime: 52 ms, faster than 85.16% of JavaScript online submissions for Remove Element.
// Memory Usage: 33.9 MB, less than 38.89% of JavaScript online submissions for Remove Element.

/*
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function (nums, val) {
  if (nums.length === 0) return nums.length;
  if (nums.indexOf(val) === -1) return nums.length;

  let i = 0
  while (i < nums.length) {
    nums[i] === val ? nums.splice(i, 1) : i++
  }

};