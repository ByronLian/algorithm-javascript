// https://leetcode.com/problems/flatten-binary-tree-to-linked-list/
// Runtime: 88 ms, faster than 76.51% of JavaScript online submissions for Flatten Binary Tree to Linked List.
// Memory Usage: 38.8 MB, less than 70.48% of JavaScript online submissions for Flatten Binary Tree to Linked List.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

var flatten = function (root) {
  let nodes = [];

  let traverse = node => {
    if (!node) return;
    nodes.push(node);
    node.left && traverse(node.left);
    node.right && traverse(node.right);
  }

  // Get all nodes
  traverse(root);

  // Assign right tree
  let current = nodes[0];
  for (let i = 1; i < nodes.length; i++) {
    current.right = nodes[i];
    current = nodes[i];
  }

  // Remove left tree
  for (const node of nodes) {
    node.left = null;
  }

  return root;
};