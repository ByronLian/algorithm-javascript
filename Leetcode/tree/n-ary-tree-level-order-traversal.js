// https://leetcode.com/problems/n-ary-tree-level-order-traversal/
// Runtime: 88 ms, faster than 98.02% of JavaScript online submissions for N-ary Tree Level Order Traversal.
// Memory Usage: 43.6 MB, less than 29.70% of JavaScript online submissions for N-ary Tree Level Order Traversal.

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/*
 * @param {Node} root
 * @return {number[][]}
 */

var levelOrder = function (root) {
  const result = [];

  const traverse = (node, lv) => {
    if (!node) return;

    result?.[lv] ? result[lv].push(node.val) : (result[lv] = [node.val]);

    for (let i in node.children) {
      traverse(node.children[i], lv + 1);
    }
  };

  traverse(root, 0);
  return result;
};
