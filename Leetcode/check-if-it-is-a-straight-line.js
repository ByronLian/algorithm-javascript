// https://leetcode.com/problems/check-if-it-is-a-straight-line/
// Runtime: 68 ms, faster than 95.59% of JavaScript online submissions for Check If It Is a Straight Line.
// Memory Usage: 39.7 MB, less than 16.91% of JavaScript online submissions for Check If It Is a Straight Line.

/*
 * @param {number[][]} coordinates
 * @return {boolean}
 */

var checkStraightLine = function (coordinates) {
  const target =
    (coordinates[1][1] - coordinates[0][1]) /
    (coordinates[1][0] - coordinates[0][0]);

  if (target === Infinity) {
    for (let i = 1; i < coordinates.length; i++) {
      if (coordinates[i][0] !== coordinates[0][0]) return false;
    }
  } else if (target === 0) {
    for (let i = 1; i < coordinates.length; i++) {
      if (coordinates[i][1] !== coordinates[0][1]) return false;
    }
  } else {
    for (let i = 1; i < coordinates.length - 1; i++) {
      const tmp =
        (coordinates[i + 1][1] - coordinates[i][1]) /
        (coordinates[i + 1][0] - coordinates[i][0]);
      if (tmp !== target) return false;
    }
  }

  return true;
};
