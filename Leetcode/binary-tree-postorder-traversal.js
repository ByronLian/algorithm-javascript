// https://leetcode.com/problems/binary-tree-postorder-traversal/

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
 * @return {number[]}
 */

var postorderTraversal = function (root) {
  if (!root) return [];

  let result = [];
  let stack = [root];

  while (stack.length) {
    let node = stack.pop();

    result.push(node.val);

    node.left && stack.push(node.left);
    node.right && stack.push(node.right);
  }

  return result.reverse();
};
