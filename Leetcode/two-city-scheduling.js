// https://leetcode.com/problems/two-city-scheduling/

/*
 * @param {number[][]} costs
 * @return {number}
 */

var twoCitySchedCost = function (costs) {
  const n = costs.length / 2;

  costs.sort((a, b) =>  a[0] - b[0] - (a[1] - b[1]));

  let total = 0;
  for (let i = 0; i < n; ++i) {
    total += costs[i][0] + costs[i + n][1];
  }

  return total;
};
