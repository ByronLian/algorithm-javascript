// https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores
// Runtime: 96 ms, faster than 100.00% of JavaScript online submissions for Minimum Difference Between Highest and Lowest of K Scores.
// Memory Usage: 40.5 MB, less than 100.00% of JavaScript online submissions for Minimum Difference Between Highest and Lowest of K Scores.

/*
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var minimumDifference = function (nums, k) {
  nums.sort((a, b) => b - a);

  let minimum = Infinity;
  for (let i = 0; i < nums.length; i++) {
    const secondEl = nums[i + k - 1];
    if (secondEl === 'undefined') break;

    const tempMin = nums[i] - secondEl;
    if (tempMin < minimum) minimum = tempMin;
  }

  return minimum;
};
