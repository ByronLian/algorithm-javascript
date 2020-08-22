// https://leetcode.com/problems/shortest-distance-to-a-character/
// Runtime: 80 ms, faster than 86.46% of JavaScript online submissions for Shortest Distance to a Character.
// Memory Usage: 38 MB, less than 58.95% of JavaScript online submissions for Shortest Distance to a Character.

/*
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */

var shortestToChar = function (S, C) {

  let preTargetIdx = -S.length;;
  let nextTargetIdx = S.indexOf(C);
  let result = [];

  let i = 0;
  while (i < S.length) {
    // If current item is target then reset preTargetIdx and nextTargetIdx
    if (S[i] === C) {
      result.push(0);
      preTargetIdx = i;
      nextTargetIdx = S.slice(i + 1).indexOf(C) !== -1 ? S.slice(i + 1).indexOf(C) + i + 1 : S.length * 2;
    } else {
      // Count the shortest path from current item to preTargetIdx and current item to nextTargetIdx
      result.push(i - preTargetIdx >= nextTargetIdx - i ? nextTargetIdx - i : i - preTargetIdx);
    }
    i++;
  }

  return result;
};