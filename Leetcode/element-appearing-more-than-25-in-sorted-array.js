// https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/
// Runtime: 84 ms, faster than 54.30% of JavaScript online submissions for Element Appearing More Than 25% In Sorted Array.
// Memory Usage: 39.8 MB, less than 31.96% of JavaScript online submissions for Element Appearing More Than 25% In Sorted Array.

/*
 * @param {number[]} arr
 * @return {number}
 */

var findSpecialInteger = function (arr) {
  if (arr.length === 1) return arr[0];

  let quarter = arr.length / 4;
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      map[arr[i]] += 1;
      if (map[arr[i]] > quarter) return arr[i];
    } else {
      map[arr[i]] = 1;
    }
  }
};