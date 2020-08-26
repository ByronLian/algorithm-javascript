// https://leetcode.com/problems/minimum-absolute-difference-in-bst

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

  let min = temp[temp.length - 1] + 1;

  for (let i = 0; i < temp.length; i++) {
    for (let j = i + 1; j < temp.length; j++) {
      if (Math.abs(temp[i] - temp[j]) < min) min = Math.abs(temp[i] - temp[j]);
    }
  }

  return min;
};
