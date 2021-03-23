// https://leetcode.com/problems/binary-search-tree-iterator-ii/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
class BSTIterator {
  constructor(root) {
    this._currentIdx = 0;
    this._elements = [undefined];

    const traverse = (node) => {
      if (!node) return;

      node.left && traverse(node.left);
      this._elements.push(node.val);
      node.right && traverse(node.right);
    };

    traverse(root);
  }

  hasNext() {
    return this._elements[this._currentIdx + 1] !== undefined;
  }

  next() {
    this._currentIdx += 1;
    return this._elements[this._currentIdx];
  }

  hasPrev() {
    return this._elements[this._currentIdx - 1] !== undefined;
  }

  prev() {
    this._currentIdx -= 1;
    return this._elements[this._currentIdx];
  }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.hasNext()
 * var param_2 = obj.next()
 * var param_3 = obj.hasPrev()
 * var param_4 = obj.prev()
 */
