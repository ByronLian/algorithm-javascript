// https://leetcode.com/problems/maximum-depth-of-binary-tree/
// Runtime: 56 ms, faster than 91.40% of JavaScript online submissions for Maximum Depth of Binary Tree.
// Memory Usage: 37.1 MB, less than 62.50% of JavaScript online submissions for Maximum Depth of Binary Tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
 * @param {TreeNode} root
 * @return {number}
 */

var maxDepth = function (root) {
  if (!root) return 0;

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};