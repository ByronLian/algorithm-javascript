// https://leetcode.com/problems/transpose-matrix/submissions/

/*
 * @param {number[][]} A
 * @return {number[][]}
 */

var transpose = function (A) {
  let row = A.length;
  let col = A[0].length;

  let newArr = new Array(col);
  for (let i = 0; i < newArr.length; i++) {
    newArr[i] = new Array(row);
    for (let j = 0; j < newArr[i].length; j++) {
      newArr[i][j] = A[j][i]
    }
  }

  return newArr;
};

