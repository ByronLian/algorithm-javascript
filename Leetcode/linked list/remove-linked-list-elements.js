// https://leetcode.com/problems/remove-linked-list-elements/
// Runtime: 80 ms, faster than 98.96% of JavaScript online submissions for Remove Linked List Elements.
// Memory Usage: 39.9 MB, less than 79.18% of JavaScript online submissions for Remove Linked List Elements.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

var removeElements = function (head, val) {
  if (!head) return head;

  let prev = null;
  let currentHead = head;

  while (currentHead) {
    // Case that current element is first one
    if (prev === null && currentHead.val === val) {
      head = currentHead.next;
    } else if (currentHead.val === val) {
      prev.next = currentHead.next;
    } else {
      prev = currentHead;
    }

    currentHead = currentHead.next;
  }

  return head;
};
