// https://leetcode.com/problems/sum-of-even-numbers-after-queries/
// Runtime: 3720 ms, faster than 49.45% of JavaScript online submissions for Sum of Even Numbers After Queries.
// Memory Usage: 44.9 MB, less than 37.36% of JavaScript online submissions for Sum of Even Numbers After Queries.

/*
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function (A, queries) {
  let result = [];

  for (let i = 0; i < queries.length; i++) {
    A[queries[i][1]] += queries[i][0];

    let temp = 0;
    for (let j = 0; j < A.length; j++) {
      if (A[j] % 2 === 0) temp += A[j];
    }

    result.push(temp);
  }

  return result;
};
