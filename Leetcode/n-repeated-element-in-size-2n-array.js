// https://leetcode.com/problems/n-repeated-element-in-size-2n-array/
// Runtime: 80 ms, faster than 81.01% of JavaScript online submissions for N-Repeated Element in Size 2N Array.
// Memory Usage: 40 MB, less than 51.49% of JavaScript online submissions for N-Repeated Element in Size 2N Array.

/*
 * @param {number[]} A
 * @return {number}
 */

var repeatedNTimes = function (A) {
  let map = {};

  for (let i = 0; i < A.length; i++) {
    if (!map[A[i]]) {
      map[A[i]] = 1;
    } else {
      map[A[i]] += 1;
    }

    if (map[A[i]] > 1) return A[i];
  }

  return null;
};
