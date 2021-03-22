// https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/
// Runtime: 104 ms, faster than 100.00% of JavaScript online submissions for Find Nearest Point That Has the Same X or Y Coordinate.
// Memory Usage: 46.6 MB, less than 100.00% of JavaScript online submissions for Find Nearest Point That Has the Same X or Y Coordinate.

/*
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */

var nearestValidPoint = function (x, y, points) {
  let smallestIdx = -1;
  let smallestDistance = Infinity;

  const checkManhattanDistance = (point, _idx) => {
    let manhattanDistance = Math.abs(x - point[0]) + Math.abs(y - point[1]);
    if (manhattanDistance < smallestDistance) {
      smallestDistance = manhattanDistance;
      smallestIdx = _idx;
    }
  };

  points.forEach((point, _idx) => {
    if (point[0] === x || point[1] === y) {
      // Check Manhattan Distance and keep smallest idx
      checkManhattanDistance(point, _idx);
    }
  });

  return smallestIdx;
};
