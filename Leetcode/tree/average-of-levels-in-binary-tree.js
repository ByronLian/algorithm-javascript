// https://leetcode.com/problems/average-of-levels-in-binary-tree/
// Runtime: 84 ms, faster than 93.88% of JavaScript online submissions for Average of Levels in Binary Tree.
// Memory Usage: 43.6 MB, less than 79.75% of JavaScript online submissions for Average of Levels in Binary Tree.

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

var averageOfLevels = function (root) {
  const result = [];
  const lvElementCount = {};

  let traverse = (node, lv) => {
    if (!node) return;

    if (result[lv] === undefined) {
      lvElementCount[lv] = 1;
      result[lv] = node.val;
    } else {
      lvElementCount[lv] += 1;
      result[lv] = result[lv] + node.val;
    }
    node.left && traverse(node.left, lv + 1);
    node.right && traverse(node.right, lv + 1);
  };

  traverse(root, 0);

  return result.map((x, i) => x / lvElementCount[i]);
};
