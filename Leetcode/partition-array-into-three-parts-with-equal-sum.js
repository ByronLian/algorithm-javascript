// https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/
// Runtime: 76 ms, faster than 97.28% of JavaScript online submissions for Partition Array Into Three Parts With Equal Sum.
// Memory Usage: 43.5 MB, less than 17.00% of JavaScript online submissions for Partition Array Into Three Parts With Equal Sum.

/*
 * @param {number[]} A
 * @return {boolean}
 */

var canThreePartsEqualSum = function (A) {
  let avg = A.reduce((acc, val) => acc + val) / 3;
  if (avg % 1 !== 0 || A.length < 3) return false;

  let temp = 0;
  let count = 0;

  for (let i = 0; i < A.length; i++) {
    if (count > 3) break;

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

  if (avg === 0) return count >= 3 ? true : false;
  return count === 3 ? true : false;
};
