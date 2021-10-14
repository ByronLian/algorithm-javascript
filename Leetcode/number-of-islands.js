// https://leetcode.com/problems/number-of-islands/

/*
 * @param {character[][]} grid
 * @return {number}
 */

var numIslands = function (grid) {
  const rowLen = grid.length;
  const colLen = grid[0].length;
  let count = 0;

  const dfs = (row, col) => {
    if (row < 0 || col < 0 || row === rowLen || col === colLen) return;
    if (grid[row][col] === "0") return;

    // mark as checked
    grid[row][col] = "0";
    // others
    dfs(row - 1, col);
    dfs(row + 1, col);
    dfs(row, col - 1);
    dfs(row, col + 1);
  };

  for (let row = 0; row < rowLen; row++) {
    for (let col = 0; col < colLen; col++) {
      // 0 means checked or no island
      if (grid[row][col] === "0") continue;

      count++;
      dfs(row, col);
    }
  }
  return count;
};
