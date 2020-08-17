// https://leetcode.com/problems/minimum-operations-to-make-array-equal/
/*
 * @param {number} n
 * @return {number}
 */

var minOperations = function (n) {
  let cur = n % 2 ? 2 : 1;
  let result = 0;

  // [1, 3, 5] -> 2 steps for 1, 5
  // [1, 3, 5, 7] -> 3 steps for 1, 7 and 1 step for 3, 5
  // [1, 3, 5, 7, 9] -> 4 steps for 1, 9 and 2 steps for 3, 7
  for (let i = 0; i < Math.floor(n / 2); i++, cur += 2) {
    result += cur;
  }

  return result;
};
