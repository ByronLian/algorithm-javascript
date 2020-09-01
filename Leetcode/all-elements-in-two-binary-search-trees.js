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
  let root1Result = [],
    root2Result = [];

  const traverse = (node, elementsArr) => {
    if (!node) return null;

    traverse(node.left, elementsArr);
    elementsArr.push(node.val);
    traverse(node.right, elementsArr);
  };

  traverse(root1, root1Result);
  traverse(root2, root2Result);
  return root1Result.concat(root2Result).sort((a, b) => a - b);
};
