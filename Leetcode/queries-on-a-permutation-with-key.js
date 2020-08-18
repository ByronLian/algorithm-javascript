// https://leetcode.com/problems/queries-on-a-permutation-with-key/
// Runtime: 64 ms, faster than 100.00% of JavaScript online submissions for Queries on a Permutation With Key.
// Memory Usage: 37.6 MB, less than 47.21% of JavaScript online submissions for Queries on a Permutation With Key.

/*
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */

var processQueries = function (queries, m) {
  const result = [];
  let mArray = [];

  // Set up array
  for (let i = 1; i <= m; i++) {
    mArray.push(i);
  }

  for (let j = 0; j < queries.length; j++) {
    // Find result
    const idx = mArray.indexOf(queries[j]);
    result.push(idx);

    // Re arrange array
    mArray.splice(idx, 1);
    mArray.unshift(queries[j]);
  }

  return result;
};
