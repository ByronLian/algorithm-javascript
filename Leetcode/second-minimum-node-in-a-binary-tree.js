// https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/
// Runtime: 72 ms, faster than 93.37% of JavaScript online submissions for Second Minimum Node In a Binary Tree.
// Memory Usage: 38.3 MB, less than 90.61% of JavaScript online submissions for Second Minimum Node In a Binary Tree.

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

var findSecondMinimumValue = function (root) {
  let min = Infinity;
  let secMin = Infinity;

  const traverse = (node) => {
    if (!node) return;

    node.left && traverse(node.left);
    if (node.val < min) {
      secMin = min;
      min = node.val;
    } else if (node.val > min && node.val < secMin) {
      secMin = node.val;
    }
    node.right && traverse(node.right);
  };

  traverse(root);

  return secMin === Infinity ? -1 : secMin;
};
