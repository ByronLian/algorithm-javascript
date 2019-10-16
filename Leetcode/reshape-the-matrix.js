// https://leetcode.com/problems/reshape-the-matrix/
// Runtime: 72 ms, faster than 96.34% of JavaScript online submissions for Reshape the Matrix.
// Memory Usage: 40.1 MB, less than 100.00% of JavaScript online submissions for Reshape the Matrix.

/*
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */

var matrixReshape = function (nums, r, c) {
  // If r * c bigger than all elements count
  if (r * c > nums[0].length * nums.length) return nums;

  let result = [];
  let temp = [];
  // Reshape
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      temp.push(nums[i][j])
      // If reach col count then clean temp and add for next row
      if (temp.length === c) {
        result.push(temp);
        temp = [];
      }
    }
  }

  return result;
};