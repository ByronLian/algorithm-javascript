// https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/
// Runtime: 64 ms, faster than 95.16% of JavaScript online submissions for Binary Search Tree to Greater Sum Tree.
// Memory Usage: 37 MB, less than 24.20% of JavaScript online submissions for Binary Search Tree to Greater Sum Tree.

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

var bstToGst = function (root) {
  let sum = 0;
  const traverse = node => {
    if (node == null) return node;
    traverse(node.right);

    sum += node.val;
    node.val = sum;

    traverse(node.left);
  }

  traverse(root);
  return root;
};