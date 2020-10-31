// https://leetcode.com/problems/closest-binary-search-tree-value/
// Runtime: 80 ms, faster than 91.23% of JavaScript online submissions for Closest Binary Search Tree Value.
// Memory Usage: 42.8 MB, less than 16.35% of JavaScript online submissions for Closest Binary Search Tree Value.

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
 * @return {number}
 */

var closestValue = function (root, target) {
  let minDiff = Infinity;
  let minDiffVal = -1;

  let traverse = (node) => {
    if (!node) return;

    const diff = Math.abs(target - node.val);
    if (diff < minDiff) {
      minDiff = diff;
      minDiffVal = node.val;
    }

    node.left && traverse(node.left);
    node.right && traverse(node.right);
  };

  traverse(root);

  return minDiffVal;
};
