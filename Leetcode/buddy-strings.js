// https://leetcode.com/problems/buddy-strings/
// Runtime: 84 ms, faster than 77.55% of JavaScript online submissions for Buddy Strings.
// Memory Usage: 39.6 MB, less than 17.35% of JavaScript online submissions for Buddy Strings.

/*
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */

var buddyStrings = function (A, B) {
  if (A.length < 2 || A.length !== B.length) return false;

  let count = 0;
  let firstA = A[0], secA = A[1];
  let firstB = B[0], secB = B[1];
  let map = {};

  if (A === B) {
    for (let i = 0; i < A.length; i++) {
      map[A[i]] ? map[A[i]] += 1 : map[A[i]] = 1
    }
  } else {
    for (let i = 0; i < A.length; i++) {
      if (A[i] !== B[i]) {
        if (count > 2) return false;
        if (count === 0) firstA = A[i], firstB = B[i];
        if (count === 1) secA = A[i], secB = B[i];
        count += 1;
      }
    }
  }

  // Case A: aabc B: aabc
  if (A === B && Object.keys(map).filter(x => map[x] >= 2).length > 0) return true;
  // Case A: aaaabc B: aaaacb
  return firstA === secB && firstB === secA ? true : false;
};