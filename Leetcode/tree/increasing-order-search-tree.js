// https://leetcode.com/problems/increasing-order-search-tree/
// Runtime: 72 ms, faster than 78.86% of JavaScript online submissions for Increasing Order Search Tree.
// Memory Usage: 37.5 MB, less than 9.73% of JavaScript online submissions for Increasing Order Search Tree.

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
 * @return {TreeNode}
 */

var increasingBST = function (root) {
  let result = [];

  // Get nodes by in order seq
  let traverse = (node) => {
    if (!node) return;

    node.left && traverse(node.left);
    result.push(node.val);
    node.right && traverse(node.right);
  };
  traverse(root);

  // Rebuild tree
  let newTree = new TreeNode(result[0]);
  let head = newTree;
  for (let i = 1; i < result.length; i++) {
    head.right = new TreeNode(result[i]);
    head = head.right;
  }

  return newTree;
};
