// https://leetcode.com/problems/kth-missing-positive-number/
// Runtime: 96 ms, faster than 36.25% of JavaScript online submissions for Kth Missing Positive Number.
// Memory Usage: 43.6 MB, less than 5.00% of JavaScript online submissions for Kth Missing Positive Number.

/*
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
  let s = new Array(arr[arr.length - 1])
    .fill(0)
    .map((_, i) => i + 1)
    .join(",");

  for (let i = 0; i < arr.length; i++) {
    s = s.replace(arr[i], "");
  }

  let newArr = s
    .split(",")
    .filter((x) => x !== "")
    .map((x) => parseInt(x));

  if (k === newArr[newArr.length - 1] && newArr.length == 1)
    return newArr[k - 1];
  if (newArr.length === 0) return k + arr[arr.length - 1];

  if (k <= newArr.length) {
    return newArr[k - 1];
  } else {
    if (newArr[newArr.length - 1] < arr[arr.length - 1]) {
      return k - newArr.length + arr[arr.length - 1];
    } else {
      return k - newArr.length + newArr[newArr.length - 1] + 1;
    }
  }
};
