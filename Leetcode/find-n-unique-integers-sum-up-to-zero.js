// https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/
// Runtime: 80 ms, faster than 55.62% of JavaScript online submissions for Find N Unique Integers Sum up to Zero.
// Memory Usage: 37.1 MB, less than 38.23% of JavaScript online submissions for Find N Unique Integers Sum up to Zero.

/*
 * @param {number} n
 * @return {number[]}
 */

var sumZero = function (n) {
  const result = [];

  for (let i = 0; i <= Math.floor(n / 2); i++) {
    if (n % 2 !== 0) result[0] = 0;
    if (i !== 0) result.push(i, -i);
  }

  return result;
};
