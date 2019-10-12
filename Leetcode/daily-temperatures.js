// https://leetcode.com/problems/daily-temperatures/
// Runtime: 360 ms, faster than 52.39% of JavaScript online submissions for Daily Temperatures.
// Memory Usage: 42.3 MB, less than 77.78% of JavaScript online submissions for Daily Temperatures.
/*
 * @param {number[]} T
 * @return {number[]}
 */

var dailyTemperatures = function (T) {
  const len = T.length;
  const biggestVal = Math.max(...T);

  let currentVal = T[0];
  let currentIdx = 0;
  let result = [];

  let i = 0;
  while (currentIdx !== len) {
    if (T[i] > currentVal) {
      result.push(i - currentIdx);

      i = currentIdx + 1;
      currentIdx = i;
      currentVal = T[i];
      
      // No warm temperature in future
    } else if (currentVal === biggestVal || i === len) {
      result.push(0);

      i = currentIdx + 1;
      currentIdx = i;
      currentVal = T[i];
    }
    i++;
  }

  return result;
};