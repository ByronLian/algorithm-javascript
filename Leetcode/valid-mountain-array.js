// https://leetcode.com/problems/valid-mountain-array/
// Runtime: 76 ms, faster than 88.81% of JavaScript online submissions for Valid Mountain Array.
// Memory Usage: 39.6 MB, less than 86.62% of JavaScript online submissions for Valid Mountain Array.

/*
 * @param {number[]} A
 * @return {boolean}
 */

var validMountainArray = function (A) {
  if (A.length < 3) return false;

  // Flag to check when height start to go down
  let flag = false;

  for (let i = 0; i < A.length - 1; i++) {
    // Case that neighbor height is same 
    if (A[i + 1] - A[i] === 0) return false;

    // Go down case
    if (flag && A[i + 1] - A[i] > 0) return false;

    // Go up case
    if (A[i + 1] - A[i] < 0) {
      if (i === 0) {
        return false;
      } else {
        flag = true;
      }
    }
  }

  // Case [0, 1, 2, 3]
  if (flag === false) return false;
  return true;
};
