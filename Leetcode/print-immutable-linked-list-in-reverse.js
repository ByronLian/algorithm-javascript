// https://leetcode.com/problems/print-immutable-linked-list-in-reverse/
// Runtime: 76 ms, faster than 98.00% of JavaScript online submissions for Print Immutable Linked List in Reverse.
// Memory Usage: 41.9 MB, less than 55.33% of JavaScript online submissions for Print Immutable Linked List in Reverse.

/**
 * // This is the ImmutableListNode's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function ImmutableListNode() {
 *    @ return {void}
 *    this.printValue = function() { // print the value of this node.
 *       ...
 *    };
 *
 *    @return {ImmutableListNode}
 *    this.getNext = function() { // return the next node.
 *       ...
 *    };
 * };
 */

/**
 * @param {ImmutableListNode} head
 * @return {void}
 */
var printLinkedListInReverse = function (head) {
  if (!head) return;

  printLinkedListInReverse(head.getNext());
  head.printValue();
};
