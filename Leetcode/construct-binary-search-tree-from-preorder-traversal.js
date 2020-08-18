// https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/
// Runtime: 72 ms, faster than 88.97% of JavaScript online submissions for Construct Binary Search Tree from Preorder Traversal.
// Memory Usage: 37.6 MB, less than 27.40% of JavaScript online submissions for Construct Binary Search Tree from Preorder Traversal.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*
 * @param {number[]} preorder
 * @return {TreeNode}
 */

var bstFromPreorder = function (preorder) {
  if (preorder.length === 0) return null;
  if (preorder.length === 1) return new TreeNode(preorder[0]);

  let root = new TreeNode(preorder[0]);
  for (let i = 1; i < preorder.length; i++) {
    root = insert(root, preorder[i]);
  }

  return root;
};

const insert = (node, val) => {
  if (node === null) return new TreeNode(val);

  if (val < node.val) {
    node.left = insert(node.left, val);
  } else {
    node.right = insert(node.right, val);
  }
  return node;
};
