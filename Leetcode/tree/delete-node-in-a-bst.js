// https://leetcode.com/problems/delete-node-in-a-bst/
// The case that root has left & right subtree: https://leetcode.com/problems/delete-node-in-a-bst/discuss/262759/Javascript-solution-runtime-92ms-with-explaination
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
 * @param {number} key
 * @return {TreeNode}
 */

var deleteNode = function (root, key) {
  if (!root) return null;

  if (root.val === key) {
    if (root.left && root.right) {
      let temp = new TreeNode();
      let right = root.right;
      temp.left = root.left;
  
      while (right.left) {
        right = right.left;
      }
      // new one
      temp.val = right.val;
      // Delete the replacement node we chose for the origin deleted node
      temp.right = deleteNode(root.right, right.val);
      return temp;
    } else if (!root.left && !root.right) {
      return null;
    } else {
      return root.left || root.right;
    }
  }

  if (root.val > key) root.left = deleteNode(root.left, key);
  if (root.val < key) root.right = deleteNode(root.right, key);

  return root;
};
