// https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/

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
 */
var FindElements = function (root) {
  this._elements = new Set();

  let traverse = (root, val = 0) => {
    this._elements.add(val);
    root.val = val;

    if (root.left) traverse(root.left, 2 * val + 1);
    if (root.right) traverse(root.right, 2 * val + 2);
  };

  traverse(root);
};

/* 
* @param {number} target
* @return {boolean}
*/
FindElements.prototype.find = function (target) {
  return this._elements.has(target);
};

/**
* Your FindElements object will be instantiated and called as such:
* var obj = new FindElements(root)
* var param_1 = obj.find(target)
*/