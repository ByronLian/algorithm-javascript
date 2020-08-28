// https://leetcode.com/problems/rotate-string/
// Runtime: 68 ms, faster than 90.29% of JavaScript online submissions for Rotate String.
// Memory Usage: 37 MB, less than 25.43% of JavaScript online submissions for Rotate String.

/*
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */

var rotateString = function (A, B) {
  if (A.length !== B.length) return false;
  if (A === B) return true;

  // abadef
  // defaba
  let count = 0;
  while (count < A.length) {
    if (A === B) return true;
    count++;
    A = A.slice(1) + A[0];
  }

  return false;
};
