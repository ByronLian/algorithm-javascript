// https://leetcode.com/problems/same-tree/
// Runtime: 48 ms, faster than 90.27% of JavaScript online submissions for Same Tree.
// Memory Usage: 33.7 MB, less than 93.33% of JavaScript online submissions for Same Tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

var isSameTree = function (p, q) {

  // same tree
  if (p === null && q === null) return true;

  // not same tree - with different children number
  if (p !== null && q === null || p === null && q !== null) return false;

  // not same tree - children with different value
  if (p.val != q.val) return false;

  return isSameTree(p.right, q.right) && isSameTree(p.left, q.left);
};