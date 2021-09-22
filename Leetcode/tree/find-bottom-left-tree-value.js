// https://leetcode.com/problems/find-bottom-left-tree-value/
// Runtime: 76 ms, faster than 98.72% of JavaScript online submissions for Find Bottom Left Tree Value.
// Memory Usage: 42.6 MB, less than 80.13% of JavaScript online submissions for Find Bottom Left Tree Value.

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

var findBottomLeftValue = function (root) {
  let currentMaxLv = -1;
  let currentMaxLvVal = root.val;

  let traverse = (node, lv) => {
    if (!node) return;

    node.left && traverse(node.left, lv + 1);
    if (lv > currentMaxLv) {
      currentMaxLv = lv;
      currentMaxLvVal = node.val;
    }
    node.right && traverse(node.right, lv + 1);
  };

  traverse(root, 0);

  return currentMaxLvVal;
};
