// https://leetcode.com/problems/delete-columns-to-make-sorted/
// Runtime: 76 ms, faster than 90.70% of JavaScript online submissions for Delete Columns to Make Sorted.
// Memory Usage: 41 MB, less than 31.39% of JavaScript online submissions for Delete Columns to Make Sorted.

/*
 * @param {string[]} A
 * @return {number}
 */

var minDeletionSize = function (A) {
  let result = 0;

  // ["cba","daf","ghi"]
  // check c d, d g
  // check b a break and result add 1 
  for (let i = 0; i < A[0].length; i++) {
    for (let j = 0; j < A.length - 1; j++) {
      if (A[j][i] > A[j + 1][i]) {
        result++;
        break;
      }
    }
  }

  return result;
};
