// https://leetcode.com/problems/serialize-and-deserialize-binary-tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/*
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

var serialize = function (root) {
  let string = "";

  const buildString = (node) => {
    if (!node) {
      string += "null ";
    } else {
      string += `${node.val} `;
      buildString(node.left);
      buildString(node.right);
    }
  };

  // Input: [1,2,3,null,null,4,5]
  // Output: 1 2 null null 3 4 null null 5 null null 
  // pre order
  buildString(root);
  return string;
};

/*
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */

var deserialize = function (data) {
  const nodes = data.split(" ");

  const buildTree = () => {
    let value = nodes.shift();

    if (value === "null") {
      return null;
    } else {
      const node = new TreeNode(Number(value));
      node.left = buildTree();
      node.right = buildTree();
      return node;
    }
  };

  return buildTree();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
