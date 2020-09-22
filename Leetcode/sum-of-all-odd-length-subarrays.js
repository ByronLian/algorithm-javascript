// https://leetcode.com/problems/sum-of-all-odd-length-subarrays/
// Runtime: 76 ms, faster than 83.93% of JavaScript online submissions for Sum of All Odd Length Subarrays.
// Memory Usage: 36.4 MB, less than 94.64% of JavaScript online submissions for Sum of All Odd Length Subarrays.

/*
 * @param {number[]} arr
 * @return {number}
 */

var sumOddLengthSubarrays = function (arr) {

  let result = 0;

  let i = 1;
  while (i <= arr.length) {

    for (let j = 0; j + i <= arr.length; j++) {
      for (let k = j; k < j + i; k++) {
        result += arr[k];
      }
    }

    i += 2;
  }

  return result;
};