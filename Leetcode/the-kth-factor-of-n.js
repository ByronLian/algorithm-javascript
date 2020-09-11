// https://leetcode.com/problems/the-kth-factor-of-n/
// Runtime: 72 ms, faster than 91.09% of JavaScript online submissions for The kth Factor of n.
// Memory Usage: 37 MB, less than 35.64% of JavaScript online submissions for The kth Factor of n.

/*
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

var kthFactor = function (n, k) {
  if (n === 1) {
    return k === 1 ? 1 : -1;
  }

  let i = 1;
  let target = n;
  let leftArr = [];
  let rightArr = [];

  while (i < target) {
    if (n % i === 0) {
      const newTarget = n / i;
      if (newTarget !== i) {
        leftArr.push(i);
        rightArr.push(newTarget);
      } else {
        leftArr.push(i);
      }
      target = newTarget;
    }
    i++;
  }

  // leftArr: [1, 2, 3] rightArr: [12, 6, 4]  k = 7
  if (k > leftArr.length + rightArr.length) return -1;

  return k <= leftArr.length
    ? leftArr[k - 1]
    : rightArr[rightArr.length - (k - leftArr.length)];
};
