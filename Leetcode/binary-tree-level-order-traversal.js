// https://leetcode.com/problems/binary-tree-level-order-traversal/
// Runtime: 72 ms, faster than 95.83% of JavaScript online submissions for Binary Tree Level Order Traversal.
// Memory Usage: 38.6 MB, less than 29.42% of JavaScript online submissions for Binary Tree Level Order Traversal.

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
 * @return {number[][]}
 */

var levelOrder = function (root) {
  let result = [];

  let traverse = (node, lv) => {
    if (!node) return;

    if (result[lv] === undefined) result[lv] = [];
    result[lv].push(node.val);

    node.left && traverse(node.left, lv + 1);
    node.right && traverse(node.right, lv + 1);
  };

  traverse(root, 0);

  return result;


  //BFS
  if (!root) return [];
    
  const order = [];
  const queue = [[root]];

  while (queue.length) {
      const currItems = queue.pop();
      const nextItems = [];
      const currLevel = []; 
      for (const item of currItems) {
          currLevel.push(item.val);
          item.left && nextItems.push(item.left);
          item.right && nextItems.push(item.right);
      }
       
      order.push(currLevel);
      nextItems.length && queue.push(nextItems);
  }
  
  return order;
};
