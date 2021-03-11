// https://leetcode.com/problems/find-the-highest-altitude/
// Runtime: 76 ms, faster than 80.64% of JavaScript online submissions for Find the Highest Altitude.
// Memory Usage: 38.9 MB, less than 17.07% of JavaScript online submissions for Find the Highest Altitude.

/*
 * @param {number[]} gain
 * @return {number}
 */

var largestAltitude = function (gain) {
  let start = 0;
  let result = [start];
  let max = start;

  for (let i = 0; i < gain.length; i++) {
    let sum = result[result.length - 1] + gain[i];
    result.push(sum);

    if (sum > max) max = sum;
  }

  return max;
};
