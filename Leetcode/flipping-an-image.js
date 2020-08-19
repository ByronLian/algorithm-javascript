// https://leetcode.com/problems/flipping-an-image/
// Runtime: 84 ms, faster than 53.91% of JavaScript online submissions for Flipping an Image.
// Memory Usage: 38.7 MB, less than 10.25% of JavaScript online submissions for Flipping an Image.

/*
 * @param {number[][]} A
 * @return {number[][]}
 */

var flipAndInvertImage = function (A) {
  const result = [];

  for (let i = 0; i < A.length; i++) {
    const temp = [];

    for (let j = A[i].length - 1; j >= 0; j--) {
      const val = A[i][j] === 0 ? 1 : 0;
      temp.push(val);
    }

    result.push(temp);
  }

  return result;
};