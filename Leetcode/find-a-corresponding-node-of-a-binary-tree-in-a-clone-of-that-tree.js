// https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/
// Runtime: 308 ms, faster than 88.83% of JavaScript online submissions for Find a Corresponding Node of a Binary Tree in a Clone of That Tree.
// Memory Usage: 58 MB, less than 81.38% of JavaScript online submissions for Find a Corresponding Node of a Binary Tree in a Clone of That Tree.
//

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function (original, cloned, target) {
  if (!cloned) return null;
  if (cloned.val === target.val) return cloned;

  return (
    getTargetCopy(original, cloned.left, target) ||
    getTargetCopy(original, cloned.right, target)
  );
};
