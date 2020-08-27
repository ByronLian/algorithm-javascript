// https://leetcode.com/problems/peak-index-in-a-mountain-array/
// Runtime: 56 ms, faster than 99.70% of JavaScript online submissions for Peak Index in a Mountain Array.
// Memory Usage: 37.8 MB, less than 7.23% of JavaScript online submissions for Peak Index in a Mountain Array.

/*
 * @param {number[]} A
 * @return {number}
 */

var peakIndexInMountainArray = function (A) {
  let peak = A[0];
  let peakIdx = 0;

  for (let i = 1; i < A.length - 1; i++) {
    if (A[i] > peak) (peak = A[i]), (peakIdx = i);
  }

  for (let j = peakIdx; j < A.length; j++) {
    if (A[j] > peak) return -1;
  }

  return peakIdx;
};
