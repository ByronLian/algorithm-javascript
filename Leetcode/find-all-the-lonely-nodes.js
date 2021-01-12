// https://leetcode.com/problems/find-all-the-lonely-nodes/
// Runtime: 88 ms, faster than 95.14% of JavaScript online submissions for Find All The Lonely Nodes.
// Memory Usage: 43.2 MB, less than 65.97% of JavaScript online submissions for Find All The Lonely Nodes.

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

var getLonelyNodes = function (root) {
  let result = [];

  const traverse = (isLonely, node) => {
    if (!node) return;
    if (isLonely) result.push(node.val);

    node.left && traverse(node.right === null, node.left);
    node.right && traverse(node.left === null, node.right);
  };

  traverse(false, root);

  return result;
};
