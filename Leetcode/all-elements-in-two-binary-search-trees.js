// https://leetcode.com/problems/all-elements-in-two-binary-search-trees/
// Runtime: 188 ms, faster than 85.24% of JavaScript online submissions for All Elements in Two Binary Search Trees.
// Memory Usage: 47.4 MB, less than 90.00% of JavaScript online submissions for All Elements in Two Binary Search Trees.

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
 * @return {number[]}
 */

var getAllElements = function (root1, root2) {
  // Traverse tree by in order will get the sort array
  // and then concat 2 arrays and sorting
  const root1Result = [],
    root2Result = [];

  const traverseRoot1 = (node) => {
    if (!node) return null;

    traverseRoot1(node.left);
    root1Result.push(node.val);
    traverseRoot1(node.right);
  };

  const traverseRoot2 = (node) => {
    if (!node) return null;

    traverseRoot2(node.left);
    root2Result.push(node.val);
    traverseRoot2(node.right);
  };

  traverseRoot1(root1);
  traverseRoot2(root2);
  return root1Result.concat(root2Result).sort((a, b) => a - b);
};
