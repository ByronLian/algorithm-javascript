// https://leetcode.com/problems/merge-intervals/
// Runtime: 84 ms, faster than 90.21% of JavaScript online submissions for Merge Intervals.
// Memory Usage: 40.9 MB, less than 5.82% of JavaScript online submissions for Merge Intervals.

/*
 * @param {number[][]} intervals
 * @return {number[][]}
 */

var merge = function (intervals) {
  const len = intervals.length;
  if (len <= 1) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);

  let result = [];
  let head = intervals[0][0];
  let tail = intervals[0][1];

  for (let i = 1; i < len; i++) {
    const currentHead = intervals[i][0];
    const currentTail = intervals[i][1];

    if (currentHead > tail) {
      result.push([head, tail]);
      head = currentHead;
    }

    if (currentTail > tail) tail = currentTail;
    if (i === len - 1) result.push([head, tail]);
  }

  return result;
};
