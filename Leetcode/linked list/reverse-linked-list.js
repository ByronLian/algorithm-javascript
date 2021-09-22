// https://leetcode.com/problems/reverse-linked-list/

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

var reverseList = function (head) {
  // 1 > 2 > 3 > 4
  // 1 < 2 3 > 4
  // 1 < 2 < 3 4
  // 1 < 2 < 3 < 4
  let prev = null;
  while (head) {
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;

  // Recursive
  // if (!head || !head.next) return head;

  // let newHead = reverseList(head.next);
  // head.next.next = head;
  // head.next = null;
  // return newHead;
};

