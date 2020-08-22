// https://leetcode.com/problems/minimum-absolute-difference/
// Runtime: 168 ms, faster than 65.00% of JavaScript online submissions for Minimum Absolute Difference.
// Memory Usage: 47.4 MB, less than 82.00% of JavaScript online submissions for Minimum Absolute Difference.

/*
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  if (arr.length < 2) return [arr.sort((a, b) => a - b)];
  arr.sort((a, b) => a - b);

  let minimum = Math.abs(arr[0] - arr[1]);
  for (let i = 0; i < arr.length - 1; i++) {
    let temp = Math.abs(arr[i] - arr[i + 1]);
    if (temp < minimum) minimum = temp;
  }

  let result = [];
  for (let j = 0; j < arr.length; j++) {
    for (let k = j + 1; k < arr.length; k++) {
      if (Math.abs(arr[k] - arr[j]) === minimum) {
        result.push([arr[j], arr[k]]);
      } else {
        break;
      }
    }
  }

  return result;
};