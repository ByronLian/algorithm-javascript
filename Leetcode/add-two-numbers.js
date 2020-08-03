// https://leetcode.com/problems/add-two-numbers/
// Runtime: 112 ms, faster than 76.78% of JavaScript online submissions for Add Two Numbers.
// Memory Usage: 42.3 MB, less than 11.11% of JavaScript online submissions for Add Two Numbers.

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

var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let result = new ListNode(0);
  let currentHead = result;

  while (l1 || l2) {
    const l1Val = l1 ? l1.val : 0;
    const l2Val = l2 ? l2.val : 0;
    let tempSum = l1Val + l2Val + carry;

    if (tempSum > 9) {
      tempSum -= 10;
      carry = 1;
    } else {
      carry = 0;
    }

    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
    currentHead.val = tempSum;

    if (!l1 && !l2 && carry === 0) break;
    currentHead.next = new ListNode(carry);
    currentHead = currentHead.next;
  }

  return result;
};
