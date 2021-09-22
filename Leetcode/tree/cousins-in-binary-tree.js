// https://leetcode.com/problems/cousins-in-binary-tree/
// Solution from: https://leetcode.com/problems/cousins-in-binary-tree/discuss/618454/Javascript-Solution-O(n).-Easy-to-understand

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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */

var isCousins = function (root, x, y) {
  if (!root) return false;
  let cache = {};
  if (root && root.val) cache[root.val] = { depth: 0, parent: null };

  const dfs = (node, depth = 1) => {
    if(!node) return;

    if (node.left) {
      cache[node.left.val] = { parent: node.val, depth: depth };
      dfs(node.left, depth + 1);
    }

    if (node.right) {
      cache[node.right.val] = { parent: node.val, depth: depth };
      dfs(node.right, depth + 1);
    }
  };

  dfs(root);

  return cache[x].depth === cache[y].depth && cache[x].parent !== cache[y].parent;
};
