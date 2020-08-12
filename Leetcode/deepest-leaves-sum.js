// https://leetcode.com/problems/deepest-leaves-sum/
// Runtime: 88 ms, faster than 98.03% of JavaScript online submissions for Deepest Leaves Sum.
// Memory Usage: 46.4 MB, less than 6.67% of JavaScript online submissions for Deepest Leaves Sum.

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

var deepestLeavesSum = function (root) {
  let result = 0;
  let deepestLevel = 0;
  let current = root;

  const traverse = (node, count) => {
    if (count > deepestLevel) {
      deepestLevel = count;
      result = 0;
    }

    if (count === deepestLevel) result += node.val;

    if (node.left) traverse(node.left, count + 1);
    if (node.right) traverse(node.right, count + 1);
  };

  traverse(current, 0);
  return result;

};