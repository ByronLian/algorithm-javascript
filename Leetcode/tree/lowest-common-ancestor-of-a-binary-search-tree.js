// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
// Runtime: 84 ms, faster than 37.08% of JavaScript online submissions for Lowest Common Ancestor of a Binary Search Tree.
// Memory Usage: 43.7 MB, less than 100.00% of JavaScript online submissions for Lowest Common Ancestor of a Binary Search Tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

var lowestCommonAncestor = function (root, p, q) {
  while (true) {
    const val = root.val;

    if (p.val >= val && val >= q.val || p.val <= val && val <= q.val) {
      return root;
      // If val less than target then search right children tree
    } else if (Math.min(p.val, q.val) > val) {
      root = root.right;
      // If val big than target then search left children tree
    } else {
      root = root.left;
    }
  }
};