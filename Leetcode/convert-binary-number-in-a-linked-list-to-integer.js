// https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/
// Runtime: 68 ms, faster than 84.55% of JavaScript online submissions for Convert Binary Number in a Linked List to Integer.
// Memory Usage: 37.1 MB, less than 5.26% of JavaScript online submissions for Convert Binary Number in a Linked List to Integer.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} head
 * @return {number}
 */

var getDecimalValue = function (head) {
  let root = head;
  const elements = [];
  let result = 0;

  while (root) {
    elements.push(root.val);
    root = root.next;
  }

  for (let i = 0; i < elements.length; i++) {
    if (elements[i] === 1)
      result += Math.pow(2, elements.length - i - 1);
  }

  return result;
};
