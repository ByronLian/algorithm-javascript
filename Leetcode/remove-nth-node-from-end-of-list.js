// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/*
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function (head, n) {
  // The "dummy" node is used to simplify some corner cases such as a list with only one node, 
  // or removing the head of the list. 
  let dummy = new ListNode(0);
  dummy.next = head;
  let length = 0;

  let first = head;
  while (first) {
    length++;
    first = first.next;
  }
  length = length - n;
  first = dummy;

  while (length > 0) {
    length--;
    first = first.next;
  }
  first.next = first.next.next;
  return dummy.next;
};