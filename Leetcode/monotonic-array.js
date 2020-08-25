// https://leetcode.com/problems/monotonic-array/
// Runtime: 88 ms, faster than 85.88% of JavaScript online submissions for Monotonic Array.
// Memory Usage: 42.5 MB, less than 85.75% of JavaScript online submissions for Monotonic Array.

/*
 * @param {number[]} A
 * @return {boolean}
 */

var isMonotonic = function (A) {
  if (A.length === 1) return true;
  let flag = A[A.length - 1] - A[0] < 0 ? "D" : "I";

  if (flag === "I") {
    for (let i = 0; i < A.length - 1; i++) {
      if (A[i + 1] < A[i]) return false;
    }
  }

  if (flag === "D") {
    for (let j = 0; j < A.length - 1; j++) {
      if (A[j + 1] > A[j]) return false;
    }
  }

  return true;
};
