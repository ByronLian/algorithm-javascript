// https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/
// Runtime: 72 ms, faster than 91.23% of JavaScript online submissions for Convert Integer to the Sum of Two No-Zero Integers.
// Memory Usage: 37.2 MB, less than 16.67% of JavaScript online submissions for Convert Integer to the Sum of Two No-Zero Integers.

/*
 * @param {number} n
 * @return {number[]}
 */

var getNoZeroIntegers = function (n) {
  for (let i = 1; i < n; i++) {
    if (
      i % 10 === 0 ||
      i.toString().indexOf("0") !== -1 ||
      (n - i).toString().indexOf("0") !== -1
    )
      continue;

    return [i, n - i];
  }
};
