// https://leetcode.com/problems/clone-n-ary-tree/
// Runtime: 108 ms, faster than 97.40% of JavaScript online submissions for Clone N-ary Tree.
// Memory Usage: 45.8 MB, less than 81.82% of JavaScript online submissions for Clone N-ary Tree.

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/*
 * @param {Node} node
 * @return {Node}
 */

var cloneTree = function (root) {
  const dfs = (node) => {
    if (!node) return;
    let copy = new Node(node.val);
    if (node.children.length > 0) {
      for (let i = 0; i < node.children.length; i++) {
        copy.children.push(dfs(node.children[i]));
      }
    }
    return copy;
  };

  return dfs(root);
};
