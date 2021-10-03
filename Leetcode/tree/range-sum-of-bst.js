// https://leetcode.com/problems/range-sum-of-bst/
// Runtime: 228 ms, faster than 59.90% of JavaScript online submissions for Range Sum of BST.
// Memory Usage: 63.6 MB, less than 46.32% of JavaScript online submissions for Range Sum of BST.

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
 * @param {number} L
 * @param {number} R
 * @return {number}
 */

var rangeSumBST = function (root, L, R) {
  let result = 0;

  const traverse = node => {
    if (node === null) return;
    if (node.val >= L && node.val <= R) result += node.val;

    // If current node val bigger than R means we only need to check left tree
    if (node.val > R) return traverse(node.left);
    // If current node val smaller than L means we only need to check right tree
    if (node.val < L) return traverse(node.right);
    // Otherwise we need to check both sub trees
    return traverse(node.left) + traverse(node.right);
  }

  traverse(root);
  return result;
};
