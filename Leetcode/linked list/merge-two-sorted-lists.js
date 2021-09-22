// https://leetcode.com/problems/merge-two-sorted-lists/
// Runtime: 80 ms, faster than 18.46% of JavaScript online submissions for Merge Two Sorted Lists.

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
  let result = new ListNode(0);
  let currentHead = result; // Pointer

  while (l1 !== null && l2 !== null) {

    if (l1.val <= l2.val) {
      currentHead.next = l1;
      l1 = l1.next;
    } else {
      currentHead.next = l2;
      l2 = l2.next;
    }

    currentHead = currentHead.next;
  }

  currentHead.next = l1 !== null ? l1 : l2;
  
  return result.next;
};