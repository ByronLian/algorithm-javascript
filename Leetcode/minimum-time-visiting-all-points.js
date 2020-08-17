// https://leetcode.com/problems/minimum-time-visiting-all-points/
// Runtime: 76 ms, faster than 71.40% of JavaScript online submissions for Minimum Time Visiting All Points.
// Memory Usage: 37.6 MB, less than 24.00% of JavaScript online submissions for Minimum Time Visiting All Points.

/*
 * @param {number[][]} points
 * @return {number}
 */

var minTimeToVisitAllPoints = function (points) {
  let count = 0;

  for (let i = 0; i < points.length - 1; i++) {
    count += Math.max(
      Math.abs(points[i][0] - points[i + 1][0]),
      Math.abs(points[i][1] - points[i + 1][1])
    );
  }

  return count;
};
