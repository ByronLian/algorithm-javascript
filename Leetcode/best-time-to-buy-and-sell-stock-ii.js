// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

/*
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
  // Solution is from here https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/solution/
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
     if (prices[i] > prices[i - 1])
        maxProfit += prices[i] - prices[i - 1];
  }

  return maxProfit;
    
};