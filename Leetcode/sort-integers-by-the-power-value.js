// https://leetcode.com/problems/sort-integers-by-the-power-value/
// Runtime: 100 ms, faster than 95.24% of JavaScript online submissions for Sort Integers by The Power Value.
// Memory Usage: 42.7 MB, less than 55.55% of JavaScript online submissions for Sort Integers by The Power Value.

/*
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */

var getKth = function (lo, hi, k) {
  // Input:
  //  7
  // 11
  //  4
  let result = [];

  for (let i = lo; i <= hi; i++) {
    let count = 0;
    let val = i;

    while (val !== 1) {
      if (val % 2 === 0) {
        val = val / 2;
      } else {
        val = 3 * val + 1;
      }
      count++;
    }

    result.push([i, count]);
  }

  // [ [ 8, 3 ], [ 10, 6 ], [ 11, 14 ], [ 7, 16 ], [ 9, 19 ] ]
  result.sort((a, b) => a[1] - b[1]);

  return result[k - 1][0];
};