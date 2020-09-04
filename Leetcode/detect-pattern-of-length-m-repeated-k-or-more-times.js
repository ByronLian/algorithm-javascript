// https://leetcode.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times/
// Runtime: 72 ms, faster than 91.82% of JavaScript online submissions for Detect Pattern of Length M Repeated K or More Times.
// Memory Usage: 37.2 MB, less than 59.75% of JavaScript online submissions for Detect Pattern of Length M Repeated K or More Times.

/*
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */

var containsPattern = function (arr, m, k) {
  if (arr.length / m < 1 || (arr.length / m === 1 && k > 1)) return false;

  let count = 0;
  let n = 0;
  while (n <= arr.length - m) {
    let currentKey = arr.slice(n, n + m);
    let currentKeyIdx = 0;

    for (let i = n; i < arr.length; i++) {
      if (arr[i] !== currentKey[currentKeyIdx]) break;

      if (idx === currentKey.length - 1) {
        currentKeyIdx = 0;
        count++;
      } else {
        currentKeyIdx++;
      }
    }

    if (count >= k) return true;
    count = 0;
    n++;
  }

  return false;
};
