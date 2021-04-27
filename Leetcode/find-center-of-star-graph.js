// https://leetcode.com/problems/find-center-of-star-graph/
// Runtime: 116 ms, faster than 86.03% of JavaScript online submissions for Find Center of Star Graph.
// Memory Usage: 55.9 MB, less than 46.70% of JavaScript online submissions for Find Center of Star Graph.

/*
 * @param {number[][]} edges
 * @return {number}
 */

var findCenter = function (edges) {
  const EDGE_COUNT = edges.length;
  const store = {};
  let node = 0;

  for (let i = 0; i < EDGE_COUNT; i++) {
    const firstEl = edges[i][0];
    const secondEl = edges[i][1];

    if (store[firstEl] === undefined) {
      store[firstEl] = 1;
    } else {
      node = firstEl;
      break;
    }

    if (store[secondEl] === undefined) {
      store[secondEl] = 1;
    } else {
      node = secondEl;
      break;
    }
  }

  return node;
};
