// https://leetcode.com/problems/distance-between-bus-stops/
// Runtime: 64 ms, faster than 96.92% of JavaScript online submissions for Distance Between Bus Stops.
// Memory Usage: 37 MB, less than 22.31% of JavaScript online submissions for Distance Between Bus Stops.

/*
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function (distance, start, destination) {
  let forwardCount = 0;
  let backwardCount = 0;

  let smaller = destination > start ? start : destination;
  let bigger = destination < start ? start : destination;

  for (let i = smaller; i < bigger; i++) {
    forwardCount += distance[i];
  }

  backwardCount = distance.reduce((acc, val) => acc + val) - forwardCount;

  return Math.min(forwardCount, backwardCount);
};
