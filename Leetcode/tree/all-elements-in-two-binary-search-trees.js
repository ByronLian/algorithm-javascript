// https://leetcode.com/problems/all-elements-in-two-binary-search-trees
// Solution from here: https://leetcode.com/problems/all-elements-in-two-binary-search-trees/discuss/1358245/Javascript-DFS-inorder-100-runtime

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
 * @return {number[]}
 */

const traverse = (node, list) => {
  if (!node) {
    return list;
  }
  traverse(node.left, list);
  list.push(node.val);
  traverse(node.right, list);

  return list;
};

var getAllElements = function (root1, root2) {
  const list1 = traverse(root1, []);
  const list2 = traverse(root2, []);

  let i = 0;
  let j = 0;
  const result = [];
  while (i < list1.length || j < list2.length) {
    if (i < list1.length && j < list2.length) {
      if (list1[i] < list2[j]) {
        result.push(list1[i]);
        i++;
      } else if (list1[i] > list2[j]) {
        result.push(list2[j]);
        j++;
      } else {
        result.push(list1[i]);
        result.push(list2[j]);
        i++;
        j++;
      }
    } else if (i < list1.length) {
      result.push(list1[i]);
      i++;
    } else if (j < list2.length) {
      result.push(list2[j]);
      j++;
    }
  }

  return result;
};
