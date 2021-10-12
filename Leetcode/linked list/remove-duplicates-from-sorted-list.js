// https://leetcode.com/problems/remove-duplicates-from-sorted-list/
// Runtime: 84 ms, faster than 79.61% of JavaScript online submissions for Remove Duplicates from Sorted List.
// Memory Usage: 38.9 MB, less than 18.19% of JavaScript online submissions for Remove Duplicates from Sorted List.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} head
 * @return {ListNode}
 */

var deleteDuplicates = function (head) {
  if (!head) return head;
  let current = head;

  while (current && current.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
};
