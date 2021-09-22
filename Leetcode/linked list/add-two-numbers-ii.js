// https://leetcode.com/problems/add-two-numbers-ii/
// Runtime: 132 ms, faster than 77.16% of JavaScript online submissions for Add Two Numbers II.
// Memory Usage: 44.7 MB, less than 9.09% of JavaScript online submissions for Add Two Numbers II.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
  // Find all elements
  const l1Els = findAllElements(l1);
  const l2Els = findAllElements(l2);

  // Find out which is long, which is short
  let shortArr = [];
  let longArr = [];
  if (l1Els.length > l2Els.length) {
    longArr = l1Els;
    shortArr = l2Els;
  } else {
    longArr = l2Els;
    shortArr = l1Els;
  }

  // Calculation
  // TODO: Build in same time
  const diff = longArr.length - shortArr.length;
  let carry = 0;
  let result = [];
  for (let i = longArr.length - 1; i >= 0; i--) {
    let tmp = 0;
    const longArrVal = longArr[i];
    const shortArrVal = shortArr[i -diff];
    shortArrVal === undefined ? tmp = longArrVal + carry : tmp = longArrVal + shortArrVal + carry;

    if (tmp >= 10) {
      result.push(tmp - 10);
      carry = 1;
    } else {
      result.push(tmp);
      carry = 0;
    }
  }

  // Extra carry digit
  if (carry > 0) result.push(carry);

  return buildList(result);
};

const findAllElements = (list) => {
  let result = [];
  let head = list;

  while (head) {
    result.push(head.val);
    head = head.next;
  }

  return result;
};

const buildList = (arr) => {
  let list = new ListNode(arr[arr.length - 1]);
  let head = list;

  for (let i = arr.length - 2; i >= 0; i--) {
    let node = new ListNode(arr[i]);
    head.next = node;
    head = head.next;
  }

  return list;
};
