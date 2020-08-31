// https://leetcode.com/problems/minimum-absolute-difference-in-bst
// Runtime: 88 ms, faster than 89.00% of JavaScript online submissions for Minimum Absolute Difference in BST.
// Memory Usage: 42.6 MB, less than 28.50% of JavaScript online submissions for Minimum Absolute Difference in BST.

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

var getMinimumDifference = function (root) {
  let temp = [];
  let traverse = (node) => {
    if (!node) return;
    node.left && traverse(node.left);
    temp.push(node.val);
    node.right && traverse(node.right);
  };

  traverse(root);

  let min = Infinity;
  for (let i = 0; i < temp.length-1; i++) {
    if (Math.abs(temp[i] - temp[i+1]) < min) min = Math.abs(temp[i] - temp[i+1]);
  }

  return min;
};
