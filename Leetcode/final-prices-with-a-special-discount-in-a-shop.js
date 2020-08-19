// https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/
// Runtime: 76 ms, faster than 88.05% of JavaScript online submissions for Final Prices With a Special Discount in a Shop.
// Memory Usage: 38.6 MB, less than 21.43% of JavaScript online submissions for Final Prices With a Special Discount in a Shop.

/*
 * @param {number[]} prices
 * @return {number[]}
 */

var finalPrices = function (prices) {
  const result = [];

  while (prices.length !== 0) {
    let currentTarget = prices[0];
    let flag = false;

    // If the item have discount
    for (let i = 1; i < prices.length; i++) {
      if (prices[i] <= currentTarget) {
        flag = true;
        result.push(currentTarget - prices[i]);
      }
      if (flag) break;
    }

    // If item don't have discount
    if (!flag) result.push(prices[0]);
    currentTarget = prices.shift();
  }

  return result;
};