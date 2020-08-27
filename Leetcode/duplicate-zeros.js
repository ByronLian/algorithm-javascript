// https://leetcode.com/problems/duplicate-zeros/
// Runtime: 88 ms, faster than 72.26% of JavaScript online submissions for Duplicate Zeros.
// Memory Usage: 39 MB, less than 11.88% of JavaScript online submissions for Duplicate Zeros.

/*
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */

var duplicateZeros = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0);
      arr.pop();
      i++;
    }
  }

  return arr;
};
