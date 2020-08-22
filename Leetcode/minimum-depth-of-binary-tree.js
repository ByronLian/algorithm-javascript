// https://leetcode.com/problems/minimum-depth-of-binary-tree/
// Runtime: 72 ms, faster than 98.07% of JavaScript online submissions for Minimum Depth of Binary Tree.
// Memory Usage: 41 MB, less than 31.08% of JavaScript online submissions for Minimum Depth of Binary Tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
 * @param {TreeNode} root
 * @return {number}
 */

var minDepth = function (root) {
  if (!root) return 0;
  let min = Infinity;

  let traverse = (node, lv) => {
    if (!node.left && !node.right) {
      if (lv < min) min = lv;
      return;
    }

    node.left && lv < min && traverse(node.left, lv + 1);
    node.right && lv < min && traverse(node.right, lv + 1);
  }

  traverse(root, 0);

  return ++min;
};