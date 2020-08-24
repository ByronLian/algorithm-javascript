// https://leetcode.com/problems/reformat-date/
// Runtime: 76 ms, faster than 69.61% of JavaScript online submissions for Reformat Date.
// Memory Usage: 36.5 MB, less than 34.81% of JavaScript online submissions for Reformat Date.

/*
 * @param {string} date
 * @return {string}
 */

var reformatDate = function (date) {
  let monthMap = { "Jan": '01', "Feb": '02', "Mar": '03', "Apr": '04', "May": '05', "Jun": '06', "Jul": '07', "Aug": '08', "Sep": '09', "Oct": '10', "Nov": '11', "Dec": '12' };
  let dateArr = date.split(' ');

  dateArr[0] = parseInt(dateArr[0]) < 10 ? '0' + parseInt(dateArr[0]).toString() : parseInt(dateArr[0]).toString();
  dateArr[1] = monthMap[dateArr[1]];

  return dateArr.reverse().join('-');
};
