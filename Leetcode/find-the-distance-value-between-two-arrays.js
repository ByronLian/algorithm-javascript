// https://leetcode.com/problems/find-the-distance-value-between-two-arrays/
// Runtime: 80 ms, faster than 75.62% of JavaScript online submissions for Find the Distance Value Between Two Arrays.
// Memory Usage: 37.2 MB, less than 59.70% of JavaScript online submissions for Find the Distance Value Between Two Arrays.

/*
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */

var findTheDistanceValue = function (arr1, arr2, d) {

  let count = 0;

  for (let i = 0; i < arr1.length; i++) {
    let flag = true;
    for (let j = 0; j < arr2.length; j++) {

      if (Math.abs(arr1[i] - arr2[j]) <= d) {
        flag = false;
        break;
      }
    }

    if (flag) count++;
  }

  return count;
};


