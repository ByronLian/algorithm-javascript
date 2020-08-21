// https://leetcode.com/problems/n-ary-tree-preorder-traversal/
// Runtime: 88 ms, faster than 87.69% of JavaScript online submissions for N-ary Tree Preorder Traversal.
// Memory Usage: 39.9 MB, less than 50.32% of JavaScript online submissions for N-ary Tree Preorder Traversal.

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/*
 * @param {Node} root
 * @return {number[]}
 */

var preorder = function (root) {
  let result = [];

  let traverse = root => {
    if (!root) return;

    result.push(root.val);

    for (let child of root.children) {
      traverse(child);
    }
  }

  traverse(root);

  return result;
};