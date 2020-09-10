// https://leetcode.com/problems/count-good-nodes-in-binary-tree/
// Runtime: 156 ms, faster than 91.18% of JavaScript online submissions for Count Good Nodes in Binary Tree.
// Memory Usage: 56.8 MB, less than 83.82% of JavaScript online submissions for Count Good Nodes in Binary Tree.

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
 * @return {number}
 */

var goodNodes = function (root) {
  if (!root) return 0;

  let count = 0;
  let traverse = (node, currentMax) => {
    if (!node) return;
    if (node.val >= currentMax) {
      count++;
      currentMax = node.val;
    }

    node.left && traverse(node.left, currentMax);
    node.right && traverse(node.right, currentMax);
  }

  traverse(root, root.val);

  return count;
};