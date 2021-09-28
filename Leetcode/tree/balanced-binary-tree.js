// https://leetcode.com/problems/balanced-binary-tree/
// Runtime: 80 ms, faster than 95.17% of JavaScript online submissions for Balanced Binary Tree.
// Memory Usage: 41.4 MB, less than 32.45% of JavaScript online submissions for Balanced Binary Tree.

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
 * @return {boolean}
 */

var isBalanced = function (root) {
  let height = node => {
    if (!node) return 0;
    let left = height(node.left);
    let right = height(node.right);

    if (left === -1 || right === -1 || Math.abs(left - right) > 1) return -1;

    // 1 means down more 1 level
    return 1 + Math.max(left, right);
  };

  // -1 means subtree is not balanced
  return height(root) !== -1;
};
