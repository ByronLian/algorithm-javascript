// https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/
// Runtime: 108 ms, faster than 52.99% of JavaScript online submissions for Sum of Nodes with Even-Valued Grandparent.
// Memory Usage: 47.2 MB, less than 30.71% of JavaScript online submissions for Sum of Nodes with Even-Valued Grandparent.

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

var sumEvenGrandparent = function (root) {
  let result = 0;

  const traverse = (node, parent, grandParent) => {
    if (node === null) return;
    if (grandParent !== null && grandParent.val % 2 === 0) result += node.val;

    return traverse(node.left, node, parent) + traverse(node.right, node, parent);
  }

  traverse(root, null, null);
  return result;
};