// https://leetcode.com/problems/pascals-triangle/
// Runtime: 44 ms, faster than 96.60% of JavaScript online submissions for Pascal's Triangle.
// Memory Usage: 33.9 MB, less than 23.08% of JavaScript online submissions for Pascal's Triangle.

/*
 * @param {number} numRows
 * @return {number[][]}
 */

var generate = function (numRows) {
  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];

  let lastRow = [1, 1];
  let result = [[1], [1, 1]];

  for (let i = 2; i < numRows; i++) {
    let tempRow = [];

    for (let j = 0; j <= i; j++) {
      if (j !== 0 && j !== i) {
        tempRow.push(lastRow[j - 1] + lastRow[j]);
      } else {
        tempRow.push(1)
      }
    }
    result.push(tempRow);
    lastRow = tempRow;
  }

  return result;

};