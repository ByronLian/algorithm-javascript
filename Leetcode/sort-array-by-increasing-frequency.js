// https://leetcode.com/problems/sort-array-by-increasing-frequency/
// Runtime: 92 ms, faster than 88.64% of JavaScript online submissions for Sort Array by Increasing Frequency.
// Memory Usage: 44.6 MB, less than 9.38% of JavaScript online submissions for Sort Array by Increasing Frequency.

/*
 * @param {number[]} nums
 * @return {number[]}
 */

var frequencySort = function (nums) {
  nums.sort((a, b) => b - a);
  nums.sort(
    (a, b) =>
      nums.filter((num) => num === a).length -
      nums.filter((num) => num === b).length
  );

  return nums;
};
