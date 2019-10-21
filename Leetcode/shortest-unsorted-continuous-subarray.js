// https://leetcode.com/problems/shortest-unsorted-continuous-subarray/
// Runtime: 96 ms, faster than 58.23% of JavaScript online submissions for Shortest Unsorted Continuous Subarray.
// Memory Usage: 38.7 MB, less than 12.50% of JavaScript online submissions for Shortest Unsorted Continuous Subarray.

/*
 * @param {number[]} nums
 * @return {number}
 */

var findUnsortedSubarray = function (nums) {

  const len = nums.length;
  if (len < 1) return 0;

  const sorted = [...nums].sort((a, b) => a - b);

  let startIdx = 0;
  let endIdx = 0;
  let isStartFind = false;
  let isEndFind = false;

  // Compare sorted array and origin array to find the different
  for (let i = 0; i < len; i++) {
    // From left
    if (nums[i] !== sorted[i] && isStartFind === false) {
      startIdx = i;
      isStartFind = true;
    }

    // From right
    if (nums[len - 1 - i] !== sorted[len - 1 - i] && isEndFind === false) {
      endIdx = len - i;
      isEndFind = true;
    }

    // If found both left element and right element
    if (isStartFind && isEndFind) break;
  }

  return endIdx - startIdx;
};