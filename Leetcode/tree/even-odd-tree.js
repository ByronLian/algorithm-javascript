// https://leetcode.com/problems/even-odd-tree/
// Runtime: 280 ms, faster than 79.29% of JavaScript online submissions for Even Odd Tree.
// Memory Usage: 84.8 MB, less than 35.72% of JavaScript online submissions for Even Odd Tree.

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
 * @return {boolean}
 */

var isEvenOddTree = function (root) {
  let store = {};
  let flag = true;

  let traverse = (node, lv) => {
    if (!node) return;

    const val = node.val;
    const prevVal = store[lv];

    // Conditions
    if (parseInt(lv) % 2 === 0) {
      if (val % 2 === 0 || (prevVal !== undefined && val <= prevVal)) {
        flag = false;
      }
    } else {
      if (val % 2 !== 0 || (prevVal !== undefined && val >= prevVal)) {
        flag = false;
      }
    }

    // Update last value of same level
    store[lv] = val;

    if (flag) {
      node.left && traverse(node.left, lv + 1);
      node.right && traverse(node.right, lv + 1);
    }
  };

  traverse(root, 0);
  return flag;
};
