// https://leetcode.com/problems/merge-two-sorted-lists/
// Runtime: 80 ms, faster than 86.86% of JavaScript online submissions for Merge Two Sorted Lists.
// Memory Usage: 40.3 MB, less than 72.11% of JavaScript online submissions for Merge Two Sorted Lists.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/*
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var mergeTwoLists = function (l1, l2) {
  let root = new ListNode(0);
  let currentHead = root; // Pointer

  while (l1 && l2) {

    if (l1.val <= l2.val) {
      currentHead.next = l1;
      l1 = l1.next;
    } else {
      currentHead.next = l2;
      l2 = l2.next;
    }

    currentHead = currentHead.next;
  }

  currentHead.next = l1 ? l1 : l2;
  
  return root.next;
};