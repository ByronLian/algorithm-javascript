// https://leetcode.com/problems/height-checker/
// Runtime: 72 ms, faster than 78.58% of JavaScript online submissions for Height Checker.
// Memory Usage: 37.1 MB, less than 20.33% of JavaScript online submissions for Height Checker.

/*
 * @param {number[]} heights
 * @return {number}
 */

var heightChecker = function (heights) {
  let newHeights = [...heights].sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < newHeights.length; i++) {
    if (newHeights[i] !== heights[i]) count++;
  }

  return count;
};
