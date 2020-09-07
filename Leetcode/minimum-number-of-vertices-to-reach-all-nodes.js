// https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/

/*
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */

var findSmallestSetOfVertices = function (n, edges) {
  let map = {};

  for (let i = 0; i < n; i++) {
    map[i] = 1;
  }

  for (let j = 0; j < edges.length; j++) {
    delete map[edges[j][1]];
  }

  return Object.keys(map);
};
