// https://leetcode.com/problems/maximum-depth-of-n-ary-tree/
// Runtime: 84 ms, faster than 85.11% of JavaScript online submissions for Maximum Depth of N-ary Tree.
// Memory Usage: 39.4 MB, less than 46.32% of JavaScript online submissions for Maximum Depth of N-ary Tree.

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/*
 * @param {Node} root
 * @return {number}
 */

var maxDepth = function (root) {
  let level = 0;

  let traverse = (node, count) => {
    if (!node) return;
    if (count > level) level = count;

    for (let child of node.children) {
      traverse(child, count + 1);
    }
  };

  traverse(root, 1);

  return level;
};
