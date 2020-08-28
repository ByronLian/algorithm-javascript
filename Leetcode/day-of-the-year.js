// https://leetcode.com/problems/day-of-the-year/
// Runtime: 68 ms, faster than 95.59% of JavaScript online submissions for Day of the Year.
// Memory Usage: 37.1 MB, less than 55.88% of JavaScript online submissions for Day of the Year.

/*
 * @param {string} date
 * @return {number}
 */

var dayOfYear = function (date) {
  let dateArr = date.split("-");
  dateArr[0] = parseInt(dateArr[0]);
  dateArr[1] = parseInt(dateArr[1]);
  dateArr[2] = parseInt(dateArr[2]);

  let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let extraDay = dateArr[0] % 4 === 0 && dateArr[0] % 100 !== 0 ? 1 : 0;

  let sum = 0;
  for (let i = 0; i < dateArr[1] - 1; i++) {
    sum += monthDays[i];
  }

  if (extraDay === 1 && dateArr[1] <= 2) extraDay = 0;

  return sum + dateArr[2] + extraDay;
};
