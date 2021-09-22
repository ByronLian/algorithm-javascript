// https://leetcode.com/problems/array-transformation/
// Runtime: 76 ms, faster than 84.21% of JavaScript online submissions for Array Transformation.
// Memory Usage: 38.9 MB, less than 10.53% of JavaScript online submissions for Array Transformation.

/*
 * @param {number[]} arr
 * @return {number[]}
 */

var transformArray = function (arr) {
  while (true) {
    let count = 0;
    let newArr = [...arr];

    for (let i = 1; i < arr.length - 1; i++) {
      if (arr[i - 1] > arr[i] && arr[i + 1] > arr[i]) {
        newArr[i] += 1;
        count++;
      } else if (arr[i - 1] < arr[i] && arr[i + 1] < arr[i]) {
        newArr[i] -= 1;
        count++;
      }
    }

    arr = newArr;
    if (count === 0) break;
  }

  return arr;
};
