// https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/
// Runtime: 92 ms, faster than 86.04% of JavaScript online submissions for Replace Elements with Greatest Element on Right Side.
// Memory Usage: 38.9 MB, less than 90.04% of JavaScript online submissions for Replace Elements with Greatest Element on Right Side.

/*
 * @param {number[]} arr
 * @return {number[]}
 */

var replaceElements = function (arr) {
  let max = -1;
  let temp;
  for (let i = arr.length - 1; i >= 0; i--) {
    temp = arr[i];
    arr[i] = max;
    if (temp > max) max = temp;
  }

  return arr;
};
