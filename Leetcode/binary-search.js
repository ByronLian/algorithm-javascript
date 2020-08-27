// https://leetcode.com/problems/binary-search/
// Runtime: 80 ms, faster than 70.37% of JavaScript online submissions for Binary Search.
// Memory Usage: 40.3 MB, less than 54.14% of JavaScript online submissions for Binary Search.

/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function (nums, target) {
  let i = 0;
  let j = nums.length - 1;

  while (i < j) {
    let mid = Math.floor((i + j) / 2);

    if (nums[mid] < target) {
      i = mid + 1;
    } else {
      j = mid;
    }
  }
  return nums[i] === target ? i : -1;

  // if (target > nums[nums.length - 1]) return -1;

  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] === target) return i;
  //   if (nums[i] > target) return -1;
  // }
};
