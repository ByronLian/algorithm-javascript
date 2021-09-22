// https://leetcode.com/problems/binary-tree-level-order-traversal-ii/
// Runtime: 72 ms, faster than 90.78% of JavaScript online submissions for Binary Tree Level Order Traversal II.
// Memory Usage: 38.7 MB, less than 7.45% of JavaScript online submissions for Binary Tree Level Order Traversal II.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
 * @param {TreeNode} root
 * @return {number[][]}
 */

var levelOrderBottom = function (root) {
  let map = {}

  let traverse = (node, lv) => {
    if (!node) return;

    if (map[lv] === undefined) map[lv] = [];
    map[lv].push(node.val);

    node.left && traverse(node.left, lv + 1);
    node.right && traverse(node.right, lv + 1);
  }

  traverse(root, 1);

  let result = [];
  for (let i in map) {
    result.unshift(map[i]);
  }

  return result;
};