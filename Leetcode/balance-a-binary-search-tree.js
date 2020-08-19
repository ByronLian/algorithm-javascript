// https://leetcode.com/problems/balance-a-binary-search-tree/

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
 * @return {TreeNode}
 */

var balanceBST = function (root) {
  const treeNodes = [];

  let findAllNodes = (root) => {
    if (root.left) findAllNodes(root.left);
    treeNodes.push(root.val);
    if (root.right) findAllNodes(root.right);
  };

  // Find all nodes by in order traverse
  findAllNodes(root);

  let buildTree = (root = null, i = 0, j = treeNodes.length - 1) => {
    // Find current root node which is mid val node
    const currentRoot = Math.floor((i + j) / 2);

    root = new TreeNode(treeNodes[currentRoot]);
    root.left = i < currentRoot ? buildTree(root, i, currentRoot - 1) : null;
    root.right = currentRoot < j ? buildTree(root, currentRoot + 1, j) : null;
    return root;
  };

  return buildTree();
};
