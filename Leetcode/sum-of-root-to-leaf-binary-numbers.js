// https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/

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

var sumRootToLeaf = function (root) {
  let result = [];
  let traverse = (node, str) => {
    node.left && traverse(node.left, str + node.val);
    node.right && traverse(node.right, str + node.val);

    if (!node.left && !node.right) {
      result.push(str + node.val);
      return;
    }
  };

  traverse(root, "");

  const total = result
    .map((x) => {
      return parseInt(x, 2);
    })
    .reduce((acc, val) => acc + val);

  return total;
};
