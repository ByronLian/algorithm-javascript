// https://leetcode.com/problems/sort-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var sortList = function (head) {
  if (head === null || head.next === null) return head;
  let pivot = findMid(head);
  let second = pivot.next;
  pivot.next = null;

  return merge(sortList(head), sortList(second));
};

const findMid = (head) => {
  let slow = head;
  let fast = head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

const merge = (l1, l2) => {
  let head = new ListNode(0);
  let node = head;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      node.next = l1;
      l1 = l1.next;
    } else {
      node.next = l2;
      l2 = l2.next;
    }
    node = node.next;
  }
  if (l1) node.next = l1;
  if (l2) node.next = l2;

  return head.next;
};
