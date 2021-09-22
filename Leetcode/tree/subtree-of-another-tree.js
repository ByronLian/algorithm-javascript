// https://leetcode.com/problems/subtree-of-another-tree/
// Runtime: 72 ms, faster than 93.18% of JavaScript online submissions for Subtree of Another Tree.
// Memory Usage: 38.9 MB, less than 100.00% of JavaScript online submissions for Subtree of Another Tree.

/*
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */

var isSubtree = function (s, t) {
  if (!s || !t) return false;
  return compareTreeNode(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t);
};

const compareTreeNode = (s, t) => {
  if (s === null && t === null) return true;
  if (s === null || t === null) return false;

  return s.val === t.val && compareTreeNode(s.left, t.left) && compareTreeNode(s.right, t.right);
}