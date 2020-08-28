// https://leetcode.com/problems/binary-prefix-divisible-by-5/

/*
 * @param {number[]} A
 * @return {boolean[]}
 */

var prefixesDivBy5 = function (A) {
  let result = [];
  let cur = 0;

  for (let i = 0; i < A.length; i++) {
    cur = ((cur << 1) | A[i]) % 5;
    if (cur === 0) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
};
