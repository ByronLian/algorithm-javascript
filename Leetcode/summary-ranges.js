// https://leetcode.com/problems/summary-ranges/submissions/
// Runtime: 64 ms, faster than 98.40% of JavaScript online submissions for Summary Ranges.
// Memory Usage: 38.7 MB, less than 5.32% of JavaScript online submissions for Summary Ranges.

/*
 * @param {number[]} nums
 * @return {string[]}
 */

var summaryRanges = function (nums) {
  const len = nums.length;
  if (len === 0) return [];

  let start = nums[0];
  let end = nums[0];
  let result = [];

  for (let i = 0; i < len - 1; i++) {
    if (nums[i + 1] - nums[i] > 1) {
      end = nums[i];
      start === end ? result.push(`${start}`) : result.push(`${start}->${end}`);
      start = nums[i + 1];
    } else {
      end = nums[i + 1];
    }
  }

  // Check last
  if (start < end) {
    result.push(`${start}->${end}`);
  } else {
    result.push(`${start}`);
  }

  return result;
};
