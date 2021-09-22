// https://leetcode.com/problems/construct-string-from-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*
 * @param {TreeNode} t
 * @return {string}
 */

var tree2str = function (t) {
  if (t == null) return "";
  if (t.left == null && t.right == null) return t.val.toString();
  if (t.right == null) return t.val + `(${tree2str(t.left)})`;
  return t.val + `(${tree2str(t.left)})` + `(${tree2str(t.right)})`;
};
