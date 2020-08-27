// https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/
// Runtime: 80 ms, faster than 89.44% of JavaScript online submissions for Partition Array Into Three Parts With Equal Sum.
// Memory Usage: 41.9 MB, less than 50.00% of JavaScript online submissions for Partition Array Into Three Parts With Equal Sum.

/*
 * @param {number[]} A
 * @return {boolean}
 */

var canThreePartsEqualSum = function (A) {
  let avg = A.reduce((acc, val) => acc + val) / 3;
  if (avg % 1 !== 0 || A.length < 3) return false;

  let temp = 0;
  let count = 0;
 
  // Case when avg is 0
  if (avg === 0) {
    for (let i = 0; i < A.length; i++) {
      temp += A[i];
      if (temp === avg) {
        temp = 0;
        count++;
      }
      if (i === A.length) {
        if (temp !== avg) {
          return false;
        } else {
          count++;
        }
      }
    }

    return count >= 3 ? true : false;
  }

  // Case when avg > 0
  for (let i = 0; i < A.length; i++) {
    temp += A[i];
    if (temp === avg) {
      temp = 0;
      count++;
    }
    if (i === A.length) {
      if (temp !== avg) {
        return false;
      } else {
        count++;
      }
    }
  }

  return count !== 3 ? false : true;
};
