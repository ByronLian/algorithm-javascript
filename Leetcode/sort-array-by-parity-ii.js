// https://leetcode.com/problems/sort-array-by-parity-ii/
// Runtime: 96 ms, faster than 98.53% of JavaScript online submissions for Sort Array By Parity II.
// Memory Usage: 43.5 MB, less than 45.97% of JavaScript online submissions for Sort Array By Parity II.

/*
 * @param {number[]} A
 * @return {number[]}
 */

var sortArrayByParityII = function (A) {
  let oddArr = [];
  let evenArr = [];

  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      evenArr[evenArr.length] = A[i];
    } else {
      oddArr[oddArr.length] = A[i];
    }
  }

  for (let j = 0; j < A.length; j++) {
    if (j % 2 === 0) {
      A[j] = evenArr.pop();
    } else {
      A[j] = oddArr.pop();
    }
  }

  return A;
};
