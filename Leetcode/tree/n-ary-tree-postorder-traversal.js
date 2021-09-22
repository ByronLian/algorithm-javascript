// https://leetcode.com/problems/n-ary-tree-postorder-traversal/
// Runtime: 92 ms, faster than 79.11% of JavaScript online submissions for N-ary Tree Postorder Traversal.
// Memory Usage: 39.8 MB, less than 58.69% of JavaScript online submissions for N-ary Tree Postorder Traversal.

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/*
 * @param {Node} root
 * @return {number[]}
 */

var postorder = function (root) {
  let result = [];

  let traverse = root => {
    if (!root) return;
  
    for (let child of root.children) {
      traverse(child);
    }
    result.push(root.val);
  };

  traverse(root);

  return result;
};