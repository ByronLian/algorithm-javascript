// https://leetcode.com/problems/diameter-of-binary-tree/

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

var diameterOfBinaryTree = function(root) {
    
  let max = 0;  
  let traverse = (node) => {
        let L = node.left ?  1 + traverse(node.left)  : 0;
        let R = node.right ? 1 + traverse(node.right) : 0;
        max = Math.max(max, L + R);

        return Math.max(L, R);
    };
    
    if (root) traverse(root);
    return max;
    
};