// https://leetcode.com/problems/find-largest-value-in-each-tree-row/
// Runtime: 84 ms, faster than 96.49% of JavaScript online submissions for Find Largest Value in Each Tree Row.
// Memory Usage: 42.8 MB, less than 92.63% of JavaScript online submissions for Find Largest Value in Each Tree Row.

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
 * @return {number[]}
 */

var largestValues = function (root) {
  if (!root) return [];

  let result = [];

  let traverse = (node, lv) => {
    if (!node) return;

    node.left && traverse(node.left, lv + 1);

    // Only record the biggest value of each level
    if (result[lv] !== undefined) {
      if (node.val > result[lv]) result[lv] = node.val;
    } else {
      result[lv] = node.val;
    }

    node.right && traverse(node.right, lv + 1);
  };

  traverse(root, 0);

  return result;
};
