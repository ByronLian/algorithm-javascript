// https://leetcode.com/problems/linked-list-cycle/
// Runtime: 60 ms, faster than 92.94% of JavaScript online submissions for Linked List Cycle.
// Memory Usage: 37 MB, less than 50.00% of JavaScript online submissions for Linked List Cycle.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/*
 * @param {ListNode} head
 * @return {boolean}
 */

var hasCycle = function (head) {
  let fstPointer = head, secPointer = head;

  // Use 2 pointer to check
  while (fstPointer && fstPointer.next) {
    fstPointer = fstPointer.next.next;
    secPointer = secPointer.next;

    if (secPointer === fstPointer) return true;
  }

  return false;
};