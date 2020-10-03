// https://leetcode.com/problems/water-bottles/
// Runtime: 72 ms, faster than 83.07% of JavaScript online submissions for Water Bottles.
// Memory Usage: 36.8 MB, less than 7.67% of JavaScript online submissions for Water Bottles.

/*
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */

var numWaterBottles = function (numBottles, numExchange) {
  let counter = numBottles;

  while (true) {
    let left = Math.floor(numBottles / numExchange);
  
    if (left < 1) break;
    counter += left;
    numBottles = left + (numBottles - numExchange * left);
  }

  return counter;
};
