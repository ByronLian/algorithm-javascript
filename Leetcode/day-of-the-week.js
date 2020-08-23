// https://leetcode.com/problems/day-of-the-week/
// Runtime: 68 ms, faster than 82.96% of JavaScript online submissions for Day of the Week.
// Memory Usage: 37.3 MB, less than 5.38% of JavaScript online submissions for Day of the Week.

/*
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */

var dayOfTheWeek = function (day, month, year) {
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return weekdays[new Date(year, month - 1, day).getDay()];
};