// https://leetcode.com/problems/sum-of-left-leaves/
// Runtime: 72 ms, faster than 95.63% of JavaScript online submissions for Sum of Left Leaves.
// Memory Usage: 38.4 MB, less than 69.31% of JavaScript online submissions for Sum of Left Leaves.

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
 * @return {number}
 */

var sumOfLeftLeaves = function(root) {
  if (!root)  return false;
  let sum = 0;

  let traverse = (node, side = null) => {
      if(!node) return;
      if(side === 'L' && !node.left && !node.right) sum += node.val;

      node.left && traverse(node.left, 'L')
      node.right && traverse(node.right, 'R')
  }
  
  traverse(root);
  
  return sum;
};