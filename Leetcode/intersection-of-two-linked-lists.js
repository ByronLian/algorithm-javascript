// https://leetcode.com/problems/intersection-of-two-linked-lists/
// Solution from: https://leetcode.com/problems/intersection-of-two-linked-lists/discuss/577791/javascript-beats-98-O(n)-time-O(1)-space

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/*
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let lengthA = 0,
    countAHead = headA,
    countBHead = headB;

  while (countAHead) {
    lengthA += 1;
    countAHead = countAHead.next;
  }

  let lengthB = 0;
  while (countBHead) {
    lengthB += 1;
    countBHead = countBHead.next;
  }

  let diff = Math.abs(lengthA - lengthB);
  let advanceHead = lengthA > lengthB ? headA : headB;
  let otherHead = lengthA > lengthB ? headB : headA;

  while (diff > 0) {
    advanceHead = advanceHead.next;
    diff -= 1;
  }

  while (advanceHead && otherHead) {
    if (advanceHead === otherHead) return advanceHead;

    advanceHead = advanceHead.next;
    otherHead = otherHead.next;
  }

  return null;
};
