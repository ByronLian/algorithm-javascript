// https://leetcode.com/problems/path-sum/
// Runtime: 84 ms, faster than 78.90% of JavaScript online submissions for Path Sum.
// Memory Usage: 40 MB, less than 28.50% of JavaScript online submissions for Path Sum.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */

var hasPathSum = function (root, sum) {
  let traverse = (node, acc) => {
    if (!node) return false;

    if (node.left === null && node.right === null && acc + node.val === sum)
      return true;

    return traverse(node.left, acc + node.val) || traverse(node.right, acc + node.val);
  }

  return traverse(root, 0);
};

