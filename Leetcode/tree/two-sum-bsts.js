// https://leetcode.com/problems/two-sum-bsts/
// Runtime: 100 ms, faster than 86.87% of JavaScript online submissions for Two Sum BSTs.
// Memory Usage: 47.8 MB, less than 8.08% of JavaScript online submissions for Two Sum BSTs.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @param {number} target
 * @return {boolean}
 */

var twoSumBSTs = function (root1, root2, target) {
  const map = new Map();

  // Get all root1 val and store into map with target - node.val
  let getRoot1Values = (obj, node) => {
    if (!node) return;

    node.left && getRoot1Values(obj, node.left);
    obj[target - node.val] = 1;
    node.right && getRoot1Values(obj, node.right);
  }

  getRoot1Values(map, root1);

  // Check if any value in store means they can match condition
  let flag = false;
  let checkRoot2Values = node => {
    if (!node || flag) return;

    if (map[node.val]) {
      flag = true;
    } else {
      node.left && checkRoot2Values(node.left);
      node.right && checkRoot2Values(node.right);
    }
  }

  checkRoot2Values(root2);

  return flag;
};