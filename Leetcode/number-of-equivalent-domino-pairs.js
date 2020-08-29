// https://leetcode.com/problems/number-of-equivalent-domino-pairs/
// Runtime: 104 ms, faster than 73.33% of JavaScript online submissions for Number of Equivalent Domino Pairs.
// Memory Usage: 47.4 MB, less than 12.66% of JavaScript online submissions for Number of Equivalent Domino Pairs.

/*
 * @param {number[][]} dominoes
 * @return {number}
 */

var numEquivDominoPairs = function (dominoes) {
  let map = {};

  for (let i = 0; i < dominoes.length; i++) {
    if (dominoes[i][0] > dominoes[i][1]) {
      if (map[`${dominoes[i][1]},${dominoes[i][0]}`] === undefined) {
        map[`${dominoes[i][1]},${dominoes[i][0]}`] = 1;
      } else {
        map[`${dominoes[i][1]},${dominoes[i][0]}`] += 1;
      }
    } else {
      if (map[`${dominoes[i][0]},${dominoes[i][1]}`] === undefined) {
        map[`${dominoes[i][0]},${dominoes[i][1]}`] = 1;
      } else {
        map[`${dominoes[i][0]},${dominoes[i][1]}`] += 1;
      }
    }
  }

  let count = 0;
  for (let i in map) {
    count += map[i] > 1 ? (map[i] - 1 + 1) * (map[i] - 1) / 2 : 0;
  }

  return count;
};