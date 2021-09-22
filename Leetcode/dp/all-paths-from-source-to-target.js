// https://leetcode.com/problems/all-paths-from-source-to-target/
// Runtime: 112 ms, faster than 87.53% of JavaScript online submissions for All Paths From Source to Target.
// Memory Usage: 47.2 MB, less than 45.27% of JavaScript online submissions for All Paths From Source to Target.

/*
 * @param {number[][]} graph
 * @return {number[][]}
 */

var allPathsSourceTarget = function (graph) {
  let result = [];

  const dfs = (arr, node) => {
    if (node === graph.length - 1) {
      result.push([...arr, node]);
    } else {
      for (let i = 0; i < graph[node].length; i++) {
        dfs([...arr, node], graph[node][i]);
      }
    }
  };

  dfs([], 0);

  return result;
};
