// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
// Solution from https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/discuss/694149/Javascript-and-C%2B%2B-solutions

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

var sortedArrayToBST = function (nums) {
  let traverse = (i = 0, j = nums.length - 1) => {
    if (j < i) return null;

    // Find the middle as root
    let k = Math.floor((i + j) / 2);
    let root = new TreeNode(nums[k]);

    // Build left and right
    root.left = traverse(i, k - 1);
    root.right = traverse(k + 1, j);

    return root;
  };

  return traverse();
};
