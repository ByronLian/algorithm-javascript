// https://leetcode.com/problems/middle-of-the-linked-list/
// Runtime: 72 ms, faster than 63.83% of JavaScript online submissions for Middle of the Linked List.
// Memory Usage: 36.4 MB, less than 42.48% of JavaScript online submissions for Middle of the Linked List.

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

var middleNode = function (head) {
  let temp = head;
  let dp = {};
  let count = 0;

  // Go trough list and store into dp
  while (temp) {
    dp[count] = temp;
    temp = temp.next;
    count++;
  }

  return dp[Math.floor(count / 2)];

  // 2 pointers is also a common way to find the middle of linked list
};
