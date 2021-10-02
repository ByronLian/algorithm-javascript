// https://leetcode.com/problems/kth-smallest-element-in-a-bst/
// Runtime: 84 ms, faster than 96.01% of JavaScript online submissions for Kth Smallest Element in a BST.
// Memory Usage: 45.4 MB, less than 8.34% of JavaScript online submissions for Kth Smallest Element in a BST.

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
 * @param {number} k
 * @return {number}
 */

var kthSmallest = function (root, k) {
  const result = [];

  let traverse = (node) => {
    if (!node) return;

    node.left && traverse(node.left);
    result.push(node.val);
    node.right && traverse(node.right);
  };

  traverse(root);

  return result[k - 1];
};

// Iterative Inorder Traversal is faster than recursive
var kthSmallest = function (root, k) {
  if (!root) return root;

  const stack = [];

  // in order traversal
  while (stack.length || root) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    // node found
    if (--k == 0) return root.val;
    root = root.right;
  }
  return null;
};
