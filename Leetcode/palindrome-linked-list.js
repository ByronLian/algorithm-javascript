// https://leetcode.com/problems/palindrome-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  const mid = findMiddle(head, head);
  const half = reverse(mid, null);

  return traverse(head, half);
};

let findMiddle = (fast, slow) => {
  if (!fast || !fast.next) return slow;
  return findMiddle(fast.next.next, slow.next);
}

let reverse = (node, prev) => {
  if (!node) return prev;
  const next = node.next;
  node.next = prev;
  return reverse(next, node);
}

let traverse = (n1, n2) => {
  if (!n1 || !n2) return true;
  if (n1.val !== n2.val) return false;
  return traverse(n1.next, n2.next);
}
