// https://leetcode.com/problems/search-insert-position/
// Runtime: 68 ms, faster than 92.60% of JavaScript online submissions for Search Insert Position.
// Memory Usage: 36.8 MB, less than 48.39% of JavaScript online submissions for Search Insert Position.

var searchInsert = function (nums, target) {
  // Big O (log N)
  if(nums.length === 0) return 0;

  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);
  
    if (target === nums[mid]) return mid;
    if (target > nums[mid]) start = mid + 1;
    if (target < nums[mid]) end = mid - 1;
  }

  return target <= nums[i] ? start : start + 1;

  // Big O (N)
  // for loop
};
