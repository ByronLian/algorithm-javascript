// https://leetcode.com/problems/sum-of-digits-in-the-minimum-number/
// Runtime: 68 ms, faster than 96.49% of JavaScript online submissions for Sum of Digits in the Minimum Number.
// Memory Usage: 38.9 MB, less than 19.30% of JavaScript online submissions for Sum of Digits in the Minimum Number.

/*
 * @param {number[]} A
 * @return {number}
 */

var sumOfDigits = function (A) {
  const minNumDigitsSum = Math.min(...A)
    .toString()
    .split("")
    .reduce((a, b) => parseInt(a) + parseInt(b));

  return minNumDigitsSum % 2 === 0 ? 1 : 0;
};
 