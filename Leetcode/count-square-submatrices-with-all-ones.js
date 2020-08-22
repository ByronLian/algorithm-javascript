// https://leetcode.com/problems/count-square-submatrices-with-all-ones/
// solution from https://leetcode.com/problems/count-square-submatrices-with-all-ones/discuss/442151/Javascript-and-C%2B%2B-solutions

/*
 * @param {number[][]} matrix
 * @return {number}
 */

var countSquares = function(matrix) {
  let M = matrix.length,
      N = matrix[0].length;
  
  let total = 0;
  let dp = [...Array(M + 1)].map( () => Array(N + 1).fill(0));
  
  for (let i = 1; i <= M; ++i) {
      for (let j = 1; j <= N; ++j) {
           if (matrix[i - 1][j - 1] === 1) {
               dp[i][j] = 1 + Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]);
               total += dp[i][j];
           }
      }
  }
    
  return total;
};