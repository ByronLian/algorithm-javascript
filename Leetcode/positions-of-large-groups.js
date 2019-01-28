// https://leetcode.com/problems/positions-of-large-groups/
// Runtime: 92 ms, faster than 100.00% of JavaScript online submissions for Positions of Large Groups.

/*
 * @param {string} S
 * @return {number[][]}
 */

var largeGroupPositions = function (S) {
  const len = S.length;
  let temp = S[0];        // Current element
  let tempStartIdx = 0;   // Temp index of current element
  let count = 0;          // Count of current element so far 
  let result = [];        // Final result

  // Solution:
  // Just do a for loop and calculate each element count
  for (let i = 0; i < len; i++) {
    if (temp !== S[i]) {
      if (count > 2) {
        result.push([tempStartIdx, i - 1]);
      }
      temp = S[i];
      tempStartIdx = i;
      count = 1;
    } else {
      count++;
    }
  }

  // Case: "aabcdefggg" or "ggg"
  if (count > 2) result.push([tempStartIdx, len - 1]);

  return result;
};