// https://leetcode.com/problems/find-anagram-mappings/ 
// Runtime: 64 ms, faster than 100.00% of JavaScript online submissions for Find Anagram Mappings.
// Memory Usage: 38.7 MB, less than 64.63% of JavaScript online submissions for Find Anagram Mappings.

/*
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */

var anagramMappings = function (A, B) {
  let map = new Map();
  let result = [];

  for (let i = 0; i < B.length; i++) {
    map[B[i]] = i;
  }

  for (let j = 0; j < A.length; j++) {
    result.push(map[A[j]]);
  }

  return result;
};
