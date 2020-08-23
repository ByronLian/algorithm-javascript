// https://leetcode.com/problems/find-lucky-integer-in-an-array/
// Runtime: 72 ms, faster than 91.95% of JavaScript online submissions for Find Lucky Integer in an Array.
// Memory Usage: 37.7 MB, less than 38.26% of JavaScript online submissions for Find Lucky Integer in an Array.

/*
 * @param {number[]} arr
 * @return {number}
 */

var findLucky = function (arr) {

  let map = {};

  // Input [2,2,3,4]
  // Output { '2' : 2, '3' : 1, '4' : 1 }
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] === undefined) {
      map[arr[i]] = 1;
    } else {
      map[arr[i]] += 1;
    }
  }

  let max = -1;
  for (let j in map) {
    if (j === map[j].toString() && map[j] > max) max = map[j];
  }

  return max;
};