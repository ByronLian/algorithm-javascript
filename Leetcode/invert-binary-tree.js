// https://leetcode.com/problems/invert-binary-tree/
// Runtime: 48 ms, faster than 92.29% of JavaScript online submissions for Invert Binary Tree.
// Memory Usage: 33.8 MB, less than 60.00% of JavaScript online submissions for Invert Binary Tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
 * @param {TreeNode} root
 * @return {TreeNode}
 */

var invertTree = function (root) {

  if (root === null || (root.right === null && root.left === null)) return root;

  let temp = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(temp);

  return root;
};

