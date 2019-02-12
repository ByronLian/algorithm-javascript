// https://leetcode.com/problems/island-perimeter/
// Runtime: 232 ms, faster than 47.83% of JavaScript online submissions for Island Perimeter.
// Memory Usage: 44 MB, less than 4.00% of JavaScript online submissions for Island Perimeter.

/*
 * @param {number[][]} grid
 * @return {number}
 */

var islandPerimeter = function (grid) {
  // Solution
  // Just check current element's up, down, left and right element.

  let count = 0;
  let upVal, downVal, leftVal, rightVal;
  const xLen = grid.length;
  const yLen = grid[0].length;

  for (let i = 0; i < xLen; i++) {
    for (let j = 0; j < yLen; j++) {

      if (grid[i][j] === 1) {

        upVal = i === 0 ? 0 : grid[i - 1][j];
        downVal = i === xLen - 1 ? 0 : grid[i + 1][j];
        leftVal = j === 0 ? 0 : grid[i][j - 1];
        rightVal = j === yLen - 1 ? 0 : grid[i][j + 1];

        if (upVal === 0) count++;
        if (downVal === 0) count++;
        if (leftVal === 0) count++;
        if (rightVal === 0) count++;

      }
    }
  }

  return count;
}