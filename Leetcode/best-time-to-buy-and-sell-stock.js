// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// Runtime: 76 ms, faster than 81.34% of JavaScript online submissions for Best Time to Buy and Sell Stock.
// Memory Usage: 37.6 MB, less than 24.24% of JavaScript online submissions for Best Time to Buy and Sell Stock.

/*
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }

  return maxProfit;
};