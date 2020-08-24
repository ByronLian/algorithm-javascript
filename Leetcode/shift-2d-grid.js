// https://leetcode.com/problems/shift-2d-grid/submissions/
// Runtime: 104 ms, faster than 85.59% of JavaScript online submissions for Shift 2D Grid.
// Memory Usage: 42.2 MB, less than 55.08% of JavaScript online submissions for Shift 2D Grid.

/*
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */

var shiftGrid = function (grid, k) {
  let temp = [];

  // Put all elements into new array
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      temp.push(grid[i][j]);
    }
  }

  // Find start position
  let startPos = k % temp.length;
  let startI =
    startPos > grid[0].length - 1 ? Math.trunc(startPos / grid[0].length) : 0;
  let startJ =
    startPos > grid[0].length - 1 ? startPos % grid[0].length : startPos;

  // Fill in element from start position to end of array
  for (let j = startI; j < grid.length; j++) {
    for (let k = j === startI ? startJ : 0; k < grid[0].length; k++) {
      grid[j][k] = temp.shift();
    }
  }

  // Fill in element from 0,0 to  start position
  for (let l = 0; l < grid.length; l++) {
    if (temp.length === 0) break;

    for (let m = 0; m < grid[0].length; m++) {
      grid[l][m] = temp.shift();
      if (temp.length === 0) break;
    }
  }

  return grid;
};
