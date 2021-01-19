//
//
//

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
 * @return {number[]}
 */

var findMode = function (root) {
  let result = [];
  let temp = new Map();
  let currentMax = -Infinity;

  const traverse = (node) => {
    if (!node) return;

    node.left && traverse(node.left);
    node.right && traverse(node.right);

    const val = node.val;
    temp[val] === undefined ? (temp[val] = 1) : (temp[val] += 1);

    if (temp[val] > currentMax) {
      currentMax = temp[val];
      result = [val];
    } else if (temp[val] === currentMax) {
      result.push(val);
    }
  };

  traverse(root);

  return result;
};
