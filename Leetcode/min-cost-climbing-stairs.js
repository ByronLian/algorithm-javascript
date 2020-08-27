// https://leetcode.com/problems/min-cost-climbing-stairs/

/*
 * @param {number[]} cost
 * @return {number}
 */

var minCostClimbingStairs = function (cost) {
  // DP
  let arr = [0, 0];
  let len = cost.length;

  for (let i = 2; i < len; i++) {
    arr[i] = Math.min(cost[i - 1] + arr[i - 1], cost[i - 2] + arr[i - 2]);
  }

  return Math.min(cost[len - 1] + arr[len - 1], cost[len - 2] + arr[len - 2]);

  // Recursive
  // let go = (i) => {
  //   if (cost.length <= i) return 0;
  //   return A[i] + Math.min(go(i + 1), go(i + 2));
  // };

  // return Math.min(go(0), go(1));
};
