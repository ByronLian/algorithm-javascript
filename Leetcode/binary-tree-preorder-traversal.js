// https://leetcode.com/problems/binary-tree-preorder-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
 * @param {TreeNode} root
 * @return {number[]}
 */

var preorderTraversal = function (root) {
  let result = [];
  let stack = [];
  root && stack.push(root);

  while (stack.length) {
    const item = stack.pop();

    result.push(item.val);
    item.right && stack.push(item.right);
    item.left && stack.push(item.left);
  }

  return result;
};