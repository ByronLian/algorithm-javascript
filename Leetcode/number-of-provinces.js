// https://leetcode.com/problems/number-of-provinces/
// Runtime: 80 ms, faster than 97.25% of JavaScript online submissions for Number of Provinces.
// Memory Usage: 40.4 MB, less than 84.75% of JavaScript online submissions for Number of Provinces.

/*
 * @param {number[][]} M
 * @return {number}
 */

var findCircleNum = function (M) {
  const visited = new Array(M.length).fill(0);
  let counter = 0;

  for (let i = 0; i < M.length; i++) {
    if (visited[i] == 0) {
      dfs(M, visited, i);
      counter++;
    }
  }

  return counter;
};

const dfs = (M, visited, i) => {
  for (let j = 0; j < M.length; j++) {
    if (M[i][j] == 1 && visited[j] == 0) {
      visited[j] = 1;
      dfs(M, visited, j);
    }
  }
};
