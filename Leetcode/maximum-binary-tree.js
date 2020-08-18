// https://leetcode.com/problems/maximum-binary-tree/
// Runtime: 108 ms, faster than 81.59% of JavaScript online submissions for Maximum Binary Tree.
// Memory Usage: 44 MB, less than 12.55% of JavaScript online submissions for Maximum Binary Tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*
 * @param {number[]} nums
 * @return {TreeNode}
 */

var constructMaximumBinaryTree = function (nums) {
  let root = new TreeNode();

  const findMaxIdx = () => {
    let max = nums[0];
    let idx = 0;
    nums.forEach((num, index) => {
      if (num > max) {
        max = num;
        idx = index;
      }
    });

    return idx;
  }

  const idx = findMaxIdx();
  root.val = nums[idx];

  let leftNums = nums.slice(0, idx);
  root.left = leftNums.length ? constructMaximumBinaryTree(leftNums) : null;

  let rightNums = nums.slice(idx + 1, nums.length);
  root.right = rightNums.length ? constructMaximumBinaryTree(rightNums) : null;

  return root;
};