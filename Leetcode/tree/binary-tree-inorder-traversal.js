// https://leetcode.com/problems/binary-tree-inorder-traversal/

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

var inorderTraversal = function (root) {
  let result = [];
  let stack = [];
  root && stack.push(root);

  while (stack.length) {
    const item = stack.pop();
  
    // left > root > right
    if (item.left) {
      stack.push(item);
      stack.push(item.left);
      // After push should assign null so it will go to else condition
      item.left = null;
    }
    else {
      result.push(item.val);
      item.right && stack.push(item.right);
    }

  }

  return result;
};