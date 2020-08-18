// https://leetcode.com/problems/merge-two-binary-trees/
// Runtime: 104 ms, faster than 80.68% of JavaScript online submissions for Merge Two Binary Trees.
// Memory Usage: 44.3 MB, less than 49.72% of JavaScript online submissions for Merge Two Binary Trees.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */

var mergeTrees = function (t1, t2) {
  // No node in that position for both trees
  if (!t1 && !t2) return null;

  // Only one node in that position for one of tree
  if (!t1 || !t2) return t1 || t2;

  // Add into new tree
  let root = new TreeNode(t1.val + t2.val);
  root.left = mergeTrees(t1.left, t2.left);
  root.right = mergeTrees(t1.right, t2.right);

  return root;
};
