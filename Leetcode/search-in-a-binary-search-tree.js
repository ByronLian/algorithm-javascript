// https://leetcode.com/problems/search-in-a-binary-search-tree/
// Runtime: 84 ms, faster than 92.63% of JavaScript online submissions for Search in a Binary Search Tree.
// Memory Usage: 43.4 MB, less than 16.37% of JavaScript online submissions for Search in a Binary Search Tree.

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
 * @param {number} val
 * @return {TreeNode}
 */

var searchBST = function (root, val) {
  if (!root) return null;
  if (root.val === val) return root;

  if (root.val > val) return searchBST(root.left, val);
  if (root.val < val) return searchBST(root.right, val);
};