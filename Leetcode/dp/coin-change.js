// https://leetcode.com/problems/coin-change

/*
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

var coinChange = function (coins, amount) {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let coin of coins) {
    for (let sum = coin; sum <= amount; sum++) {
      // For current answer we need to find previous minimum + 1 (1 means this time itself)
      // 
      // e.g [1, 2, 5] target: 6
      // For finding amount 6 with coin 1, we need to know minimum dp[5] result
      // For finding amount 6 with coin 2, we need to know minimum dp[4] result
      // For finding amount 6 with coin 5, we need to know minimum dp[1] result
      // 
      // and for above 3 cases we only keep the minimum for dp[6]
      dp[sum] = Math.min(dp[sum], dp[sum - coin] + 1);
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};
