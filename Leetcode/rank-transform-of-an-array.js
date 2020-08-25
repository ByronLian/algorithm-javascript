// https://leetcode.com/problems/rank-transform-of-an-array/
// Runtime: 308 ms, faster than 48.24% of JavaScript online submissions for Rank Transform of an Array.
// Memory Usage: 68.6 MB, less than 12.95% of JavaScript online submissions for Rank Transform of an Array.

/*
 * @param {number[]} arr
 * @return {number[]}
 */

var arrayRankTransform = function (arr) {
  let newArr = [...new Set([...arr].sort((a, b) => a - b))];
  let map = {};
  let result = [];

  for (let idx in newArr) {
    map[newArr[idx]] = parseInt(idx) + 1;
  }

  for (let idx in arr) {
    result.push(map[arr[idx]]);
  }

  return result;
};
