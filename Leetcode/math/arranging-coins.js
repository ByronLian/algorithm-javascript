// https://leetcode.com/problems/arranging-coins/
// Runtime: 104 ms, faster than 78.29% of JavaScript online submissions for Arranging Coins.
// Memory Usage: 40 MB, less than 10.32% of JavaScript online submissions for Arranging Coins.

/*
 * @param {number} n
 * @return {number}
 */

var arrangeCoins = function (n) {
  let i = 1;
  while (n >= 0) {
    n -= i;

    if (n === 0) return i;
    if (n < 0) return i - 1;

    i++;
  }
};
 
// TODO: Binary search & Math