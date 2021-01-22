// https://leetcode.com/problems/richest-customer-wealth/
// Runtime: 72 ms, faster than 93.88% of JavaScript online submissions for Richest Customer Wealth.
// Memory Usage: 38.7 MB, less than 57.99% of JavaScript online submissions for Richest Customer Wealth.

/*
 * @param {number[][]} accounts
 * @return {number}
 */

var maximumWealth = function (accounts) {
  let richest = -Infinity;

  accounts.forEach((account) => {
    const wealth = account.reduce((acc, val) => acc + val);
    if (wealth > richest) richest = wealth;
  });

  return richest;
};
