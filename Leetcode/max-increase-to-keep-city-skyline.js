// https://leetcode.com/problems/max-increase-to-keep-city-skyline/
// Runtime: 80 ms, faster than 71.84% of JavaScript online submissions for Max Increase to Keep City Skyline.
// Memory Usage: 36.7 MB, less than 92.00% of JavaScript online submissions for Max Increase to Keep City Skyline.

/*
 * @param {number[][]} grid
 * @return {number}
 */

var maxIncreaseKeepingSkyline = function (grid) {
  const topToBottomMax = Array(grid.length).fill(0);
  let result = 0;

  // Find top to bottom max
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (topToBottomMax[j] < grid[i][j]) topToBottomMax[j] = grid[i][j];
    }
  }

  // Find left to right max and calculate
  for (let i = 0; i < grid.length; i++) {
    const leftToRightMax = Math.max(...grid[i]);

    for (let j = 0; j < grid[i].length; j++) {
      // Find the limit
      const range = topToBottomMax[j] > leftToRightMax ? leftToRightMax : topToBottomMax[j];
      if (range > grid[i][j]) result += (range - grid[i][j]);
    }
  }

  return result;
};
