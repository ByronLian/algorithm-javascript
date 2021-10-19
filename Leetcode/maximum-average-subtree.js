// https://leetcode.com/problems/maximum-average-subtree/
// Runtime: 80 ms, faster than 93.70% of JavaScript online submissions for Maximum Average Subtree.
// Memory Usage: 44.7 MB, less than 55.56% of JavaScript online submissions for Maximum Average Subtree.

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

var maximumAverageSubtree = function (root) {
  let maxAvg = 0;

  const dfs = (node) => {
    if (!node) return [0, 0];

    const [leftSum, leftNodeCount] = dfs(node.left);
    const [rightSum, rightNodeCount] = dfs(node.right);

    const currentTotalSum = leftSum + rightSum + node.val;
    const currentTotalCount = leftNodeCount + rightNodeCount + 1;
    const currentAvg = currentTotalSum/currentTotalCount;
        
    if(currentAvg > maxAvg) maxAvg = currentAvg;

    return [currentTotalSum, currentTotalCount];
  }

  dfs(root);

  return maxAvg;
};
