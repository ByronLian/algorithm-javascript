// https://leetcode.com/problems/binary-tree-tilt/
// Runtime: 80 ms, faster than 99.10% of JavaScript online submissions for Binary Tree Tilt.
// Memory Usage: 42.6 MB, less than 99.55% of JavaScript online submissions for Binary Tree Tilt.

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

var findTilt = function (root) {
  let result = 0;

  const traverse = (node) => {
    if (!node) return 0;

    const leftSum = traverse(node.left);
    const rightSum = traverse(node.right);

    result += Math.abs(leftSum - rightSum);
    return node.val + leftSum + rightSum;
  };

  traverse(root);
  return result;
};
