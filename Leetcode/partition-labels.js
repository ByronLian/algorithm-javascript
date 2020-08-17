// https://leetcode.com/problems/partition-labels/
/*
 * @param {string} S
 * @return {number[]}
 */

var partitionLabels = function (S) {
  // Find the maximum length of that char
  const map = new Map();
  for (let i = S.length - 1; i >= 0; i--) {
    if (!map.has(S[i])) {
      map.set(S[i], i);
    }
  }

  const result = [];
  let count = 0;
  let end = 0;

  for (let i = 0; i < S.length; i++) {
    const temp = map.get(S[i]);
    // Set the maximum of char
    if (end < temp) end = temp;
    count++;

    // If char reach maximum then push result and reset counter
    if (i === end) {
      result.push(count);
      count = 0;
    }
  }

  return result;
};
