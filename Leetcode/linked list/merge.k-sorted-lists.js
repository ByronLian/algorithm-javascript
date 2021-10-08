// https://leetcode.com/problems/merge-k-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

var mergeKLists = function (lists) {
  const elements = [];

  const insertElement = (val) => {
    if (elements.length === 0 || val >= elements[elements.length - 1]) {
      elements.push(val);
      return;
    }

    for (let j = 0; j < elements.length; j++) {
      if (elements[j] >= val) {
        elements.splice(j, 0, val);
        break;
      }
    }
  };

  for (let i = 0; i < lists.length; i++) {
    while (lists[i]) {
      if (lists[i]) insertElement(lists[i].val);
      lists[i] = lists[i].next;
    }
  }

  if (elements.length === 0) return null;

  let root = new ListNode(elements[0]);
  let head = root;

  for (let j = 1; j < elements.length; j++) {
    head.next = new ListNode(elements[j]);
    head = head.next;
  }

  return root;
};
