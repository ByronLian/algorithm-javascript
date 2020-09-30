// https://leetcode.com/problems/k-diff-pairs-in-an-array/
// Runtime: 108 ms, faster than 54.73% of JavaScript online submissions for K-diff Pairs in an Array.
// Memory Usage: 43.6 MB, less than 40.69% of JavaScript online submissions for K-diff Pairs in an Array.

/*
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findPairs = function (nums, k) {
  let count = 0;
  let map = {};
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const diff = nums[j] - nums[i];
      if (diff > k) break;

      if (diff === k && map[`${nums[j]} ,${nums[i]}`] !== 1) {
        count++;
        map[`${nums[j]} ,${nums[i]}`] = 1;
      }
    }
  }

  return count;
};
