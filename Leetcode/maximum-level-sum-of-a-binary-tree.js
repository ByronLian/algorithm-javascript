// https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/
// Runtime: 180 ms, faster than 98.09% of JavaScript online submissions for Maximum Level Sum of a Binary Tree.
// Memory Usage: 55.7 MB, less than 53.43% of JavaScript online submissions for Maximum Level Sum of a Binary Tree.

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

var maxLevelSum = function (root) {
  let temp = [];

  let traverse = (node, lv) => {
    node.left && traverse(node.left, lv + 1);
    node.right && traverse(node.right, lv + 1);

    if (temp[lv]) {
      temp[lv] += node.val;
    } else {
      temp[lv] = node.val
    }
  }

  traverse(root, 0);

  return temp.indexOf(Math.max(...temp)) + 1;
};

