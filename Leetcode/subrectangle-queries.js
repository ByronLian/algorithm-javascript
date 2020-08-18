// https://leetcode.com/problems/subrectangle-queries/
// Runtime: 104 ms, faster than 77.51% of JavaScript online submissions for Subrectangle Queries.
// Memory Usage: 41.4 MB, less than 79.88% of JavaScript online submissions for Subrectangle Queries.

/*
 * @param {number[][]} rectangle
 */

/*
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @param {number} newValue
 * @return {void}
 */

/*
 * @param {number} row
 * @param {number} col
 * @return {number}
 */

/**
 * Your SubrectangleQueries object will be instantiated and called as such:
 * var obj = new SubrectangleQueries(rectangle)
 * obj.updateSubrectangle(row1,col1,row2,col2,newValue)
 * var param_2 = obj.getValue(row,col)
 */

class SubrectangleQueries {
  constructor(rectangle) {
    this._rectangle = rectangle;
  }

  updateSubrectangle(row1, col1, row2, col2, newValue) {
    for (let i = row1; i <= row2; i++) {
      for (let j = col1; j <= col2; j++) {
        this._rectangle[i][j] = newValue;
      }
    }
  }

  getValue(row, col) {
    if (this._rectangle.length < row || this._rectangle[0].length < col)
      return null;
    return this._rectangle[row][col];
  }
}
