// https://leetcode.com/problems/symmetric-tree/submissions/

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

var isSymmetric = function (root) {

  let traverse = (t1, t2) => {
    if (t1 == null && t2 == null) return true;
    if (t1 == null || t2 == null) return false;
    return (t1.val == t2.val) && traverse(t1.right, t2.left) && traverse(t1.left, t2.right);
  }

  return traverse(root, root);
};