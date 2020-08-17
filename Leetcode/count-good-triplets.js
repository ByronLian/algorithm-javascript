// https://leetcode.com/problems/count-good-triplets/
// Runtime: 84 ms, faster than 81.56% of JavaScript online submissions for Count Good Triplets.
// Memory Usage: 37 MB, less than 20.78% of JavaScript online submissions for Count Good Triplets.

/*
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */

var countGoodTriplets = function (arr, a, b, c) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (
          Math.abs(arr[i] - arr[j]) <= a &&
          Math.abs(arr[j] - arr[k]) <= b &&
          Math.abs(arr[i] - arr[k]) <= c
        )
          count++;
      }
    }
  }

  return count;
};
