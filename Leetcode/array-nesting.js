// https://leetcode.com/problems/array-nesting
// Runtime: 96 ms, faster than 88.49% of JavaScript online submissions for Array Nesting.
// Memory Usage: 42.6 MB, less than 57.89% of JavaScript online submissions for Array Nesting.

/*
 * @param {number[]} nums
 * @return {number}
 */

var arrayNesting = function (nums) {
  let max = 0;
  let visited = {};

  for (let i = 0; i < nums.length; i++) {
    let key = nums[i];
    if (visited[key] === 1) continue;

    let count = 0;
    visited[key] = 1;
    while (true) {
      const currentVal = nums[key];
      if (visited[currentVal] === 1) {
        if (count + 1 > max) max = count + 1;
        break;
      }

      visited[currentVal] = 1;
      count++;
      key = currentVal;
    }
  }
  return max;
};