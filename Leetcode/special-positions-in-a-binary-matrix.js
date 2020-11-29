// https://leetcode.com/problems/special-positions-in-a-binary-matrix/
// Runtime: 68 ms, faster than 99.03% of JavaScript online submissions for Special Positions in a Binary Matrix.
// Memory Usage: 40.9 MB, less than 5.84% of JavaScript online submissions for Special Positions in a Binary Matrix.

/*
 * @param {number[][]} mat
 * @return {number}
 */

var numSpecial = function(mat) {
  // e.g
  // [0,0,0,0,0,1,0,0]
  // [0,0,0,0,1,0,0,1]
  // [0,0,0,0,1,0,0,0]
  // [1,0,0,0,1,0,0,0]
  // [0,0,1,1,0,0,0,0]
  let rowHas1Pos = new Array(mat[0].length).fill(0);
  let col1Count = new Array(mat[0].length).fill(0);
  let total = 0;
  
  for(let i=0; i<mat.length; i++) {
      let count = 0;
      let pos = -1;
      for(let j=0; j<mat[0].length; j++) {
          if(mat[i][j] === 1) {
              col1Count[j] += 1;
              count++;
              pos = j;
          }
      }
      
      if(count === 1) rowHas1Pos[pos] += 1;
  }
  
  // rowHas1Pos: [0, 0, 0, 0, 1, 1, 0, 0]
  // col1Count:  [1, 0, 1, 1, 3, 1, 0, 1]
  for(let k=0; k<rowHas1Pos.length; k++) {
      if(rowHas1Pos[k] === 1 && col1Count[k] === 1) total++;
  }
  
  return total;
};




