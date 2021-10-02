// https://leetcode.com/problems/leaf-similar-trees/
// Runtime: 72 ms, faster than 92.07% of JavaScript online submissions for Leaf-Similar Trees.
// Memory Usage: 38.5 MB, less than 28.90% of JavaScript online submissions for Leaf-Similar Trees.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */

const traverse = (node, result) => {
  if (!node) return result;

  if (!node.left && !node.right) {
    result.push(node.val);
  } else {
    node.left && traverse(node.left, result);
    node.right && traverse(node.right, result);
  }

  return result;
};

var leafSimilar = function (root1, root2) {
  const root1Leaf = traverse(root1, []);
  const root2Leaf = traverse(root2, []);

  if (root1Leaf.length !== root2Leaf.length) return false;

  for (let i = 0; i < root1Leaf.length; i++) {
    if (root1Leaf[i] !== root2Leaf[i]) return false;
  }

  return true;
};
