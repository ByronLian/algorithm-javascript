// https://leetcode.com/problems/insert-into-a-binary-search-tree/
// Runtime: 120 ms, faster than 75.53% of JavaScript online submissions for Insert into a Binary Search Tree.
// Memory Usage: 44.2 MB, less than 61.75% of JavaScript online submissions for Insert into a Binary Search Tree.

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

var insertIntoBST = function (root, val) {
  if (!root) return new TreeNode(val);
  return insert(root, val);
};

const insert = (node, val) => {
  if (node === null) return new TreeNode(val);

  if (val < node.val) {
    node.left = insert(node.left, val);
  } else {
    node.right = insert(node.right, val);
  }
  return node;
};
