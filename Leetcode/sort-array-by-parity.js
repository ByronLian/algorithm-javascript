// https://leetcode.com/problems/sort-array-by-parity/
// Runtime: 88 ms, faster than 86.80% of JavaScript online submissions for Sort Array By Parity.
// Memory Usage: 38.7 MB, less than 76.25% of JavaScript online submissions for Sort Array By Parity.

/*
 * @param {number[]} A
 * @return {number[]}
 */

var sortArrayByParity = function (A) {
  const result = [];

  A.forEach((x) => {
    if (x % 2 === 0) {
      result.unshift(x);
    } else {
      result[result.length] = x;
    }
  });

  return result;
};
