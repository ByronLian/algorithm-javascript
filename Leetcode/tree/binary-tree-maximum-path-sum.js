// https://leetcode.com/problems/binary-tree-maximum-path-sum
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

var maxPathSum = function (root) {
  let maximum = -Infinity;

  const traverse = (node) => {
    if (!node) return;

    const leftVal = node.left ? traverse(node.left) : 0;
    const rightVal = node.right ? traverse(node.right) : 0;

    maximum = Math.max(
      maximum,
      node.val,
      node.val + leftVal,
      node.val + rightVal,
      node.val + leftVal + rightVal
    );

    return Math.max(node.val, node.val + leftVal, node.val + rightVal);
  };

  traverse(root);
  return maximum;
};
