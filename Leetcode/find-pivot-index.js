// https://leetcode.com/problems/find-pivot-index/
// Runtime: 68 ms, faster than 90.96% of JavaScript online submissions for Find Pivot Index.
// Memory Usage: 37.5 MB, less than 100.00% of JavaScript online submissions for Find Pivot Index.
/*
 * @param {number[]} nums
 * @return {number}
 */

var pivotIndex = function (nums) {

  const len = nums.length;
  // Return -1 if array length is not enough to compare
  if (len <= 2) return -1;

  // We set index as 0 
  // keep left side and right side total value base on this index
  let left = 0;
  let right = nums.reduce(
    (acc, cur) => acc + cur,
    0
  ) - nums[0];

  // Return if left side total already same with right side total
  if (left === right) return 0;

  // Move from left to right side and use DP for keeping Big O(n)
  for (let i = 1; i < len; i += 1) {
    left += nums[i - 1];
    right -= nums[i];

    if (left === right) return i;
  }

  return -1;
};
