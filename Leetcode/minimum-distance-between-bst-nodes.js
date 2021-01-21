// https://leetcode.com/problems/minimum-distance-between-bst-nodes/
// Runtime: 80 ms, faster than 70.42% of JavaScript online submissions for Minimum Distance Between BST Nodes.
// Memory Usage: 39.2 MB, less than 55.87% of JavaScript online submissions for Minimum Distance Between BST Nodes.

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

var minDiffInBST = function (root) {
  let min = Infinity;
  let prev = null;

  let traverse = (node) => {
    if (!node) return;
    node.left && traverse(node.left);
    // Base on in-order traverse, the value will from small to big and min diff will occur 
    if (prev != null) min = Math.min(min, node.val - prev);
    prev = node.val;

    node.right && traverse(node.right);
  };

  traverse(root);

  return min;
};
