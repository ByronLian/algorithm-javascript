// https://leetcode.com/problems/pascals-triangle-ii/
// Runtime: 40 ms, faster than 99.33% of JavaScript online submissions for Pascal's Triangle II.
// Memory Usage: 33.9 MB, less than 50.00% of JavaScript online submissions for Pascal's Triangle II.

/*
 * @param {number} rowIndex
 * @return {number[]}
 */

var getRow = function (rowIndex) {
  if (rowIndex === 0) return [1];

  let lastRow = [1, 1];
  // row start from 0
  for (let i = 1; i < rowIndex + 1; i++) {
    let tempRow = [];

    for (let j = 0; j <= i; j++) {
      if (j !== 0 && j !== i) {
        tempRow.push(lastRow[j - 1] + lastRow[j]);
      } else {
        tempRow.push(1)
      }
    }
    lastRow = tempRow;
  }

  return lastRow;
};