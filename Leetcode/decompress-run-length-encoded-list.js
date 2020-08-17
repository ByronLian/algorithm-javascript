// https://leetcode.com/problems/decompress-run-length-encoded-list/
// Runtime: 84 ms, faster than 96.39% of JavaScript online submissions for Decompress Run-Length Encoded List.
// Memory Usage: 38.7 MB, less than 89.00% of JavaScript online submissions for Decompress Run-Length Encoded List.

/*
 * @param {number[]} nums
 * @return {number[]}
 */

var decompressRLElist = function (nums) {
  const result = [];
  for (let i = 0; i < nums.length; i += 2) {
    for (let j = 0; j < nums[i]; j++) {
      result.push(nums[i + 1]);
    }
  }

  return result;
};
