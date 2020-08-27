// https://leetcode.com/problems/binary-tree-paths/
// Runtime: 72 ms, faster than 91.93% of JavaScript online submissions for Binary Tree Paths.
// Memory Usage: 38.8 MB, less than 10.01% of JavaScript online submissions for Binary Tree Paths.

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
 * @return {string[]}
 */

var binaryTreePaths = function (root) {
  if (!root) return [];
  if (!root.left && !root.right) return [root.val.toString()];

  let result = [];
  let traverse = (node, str = "") => {
    if (!node) return;

    if (!node.left && !node.right) {
      result.push((str + "->" + node.val).replace("->", ""));
    } else {
      node.left && traverse(node.left, str + "->" + node.val);
      node.right && traverse(node.right, str + "->" + node.val);
    }
  };

  traverse(root);

  return result;
};
