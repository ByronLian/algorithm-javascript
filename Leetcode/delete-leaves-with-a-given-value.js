// https://leetcode.com/problems/delete-leaves-with-a-given-value/
// Runtime: 104 ms, faster than 42.77% of JavaScript online submissions for Delete Leaves With a Given Value.
// Memory Usage: 42 MB, less than 8.18% of JavaScript online submissions for Delete Leaves With a Given Value.

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
 * @param {number} target
 * @return {TreeNode}
 */

var removeLeafNodes = function (root, target) {

  let traverse = node => {
    if (!node) return null;

    node.left = traverse(node.left);
    node.right = traverse(node.right);

    return !node.left && !node.right && node.val === target ? null : node;
  }

  return traverse(root);
};