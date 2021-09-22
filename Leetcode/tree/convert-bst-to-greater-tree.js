// https://leetcode.com/problems/convert-bst-to-greater-tree/

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

var convertBST = function (root) {
  if (!root) return root;

  let sum = 0;

  let traverse = (node) => {
    node.right && traverse(node.right);

    sum += node.val;
    node.val = sum;

    node.left && traverse(node.left);

    return root;
  };

  return traverse(root);
};
