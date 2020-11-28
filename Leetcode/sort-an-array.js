// https://leetcode.com/problems/sort-an-array/
// Runtime: 104 ms, faster than 92.03% of JavaScript online submissions for Sort an Array.
// Memory Usage: 53.8 MB, less than 11.24% of JavaScript online submissions for Sort an Array.

/*
 * @param {number[]} nums
 * @return {number[]}
 */

var sortArray = function (nums) {
  if (nums.length <= 1) return nums;

  const left = [];
  const right = [];
  const middle = nums[nums.length - 1];

  // Quick Sort
  for (let i = 0; i < nums.length - 1; ++i) {
    const val = nums[i];
    val < middle ? left.push(val) : right.push(val);
  }

  return [...sortArray(left), middle, ...sortArray(right)];
};
