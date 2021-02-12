// https://leetcode.com/problems/k-closest-points-to-origin/
// Runtime: 184 ms, faster than 81.20% of JavaScript online submissions for K Closest Points to Origin.
// Memory Usage: 49.5 MB, less than 64.17% of JavaScript online submissions for K Closest Points to Origin.

/*
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function (points, K) {
  points
    .sort(
      (a, b) =>
        Math.sqrt(a[0] * a[0] + a[1] * a[1]) -
        Math.sqrt(b[0] * b[0] + b[1] * b[1])
    )
    .splice(K);

  return points;
};
