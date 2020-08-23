// https://leetcode.com/problems/delete-node-in-a-linked-list/
// Runtime: 80 ms, faster than 78.27% of JavaScript online submissions for Delete Node in a Linked List.
// Memory Usage: 38.8 MB, less than 6.93% of JavaScript online submissions for Delete Node in a Linked List.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/*
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};