// https://leetcode.com/problems/univalued-binary-tree/
// Runtime: 72 ms, faster than 79.92% of JavaScript online submissions for Univalued Binary Tree.
// Memory Usage: 37.4 MB, less than 12.91% of JavaScript online submissions for Univalued Binary Tree.

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
var isUnivalTree = function (root) {
  const targetVal = root.val;
  let flag = true;

  let traverse = (node) => {
    if (flag === false) return false;
    if (node.val !== targetVal) {
      flag = false;
    } else {
      node.left && traverse(node.left);
      node.right && traverse(node.right);
    }
  };
  traverse(root);

  return flag;
};
