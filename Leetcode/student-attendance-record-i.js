// https://leetcode.com/problems/student-attendance-record-i/
// Runtime: 64 ms, faster than 98.26% of JavaScript online submissions for Student Attendance Record I.
// Memory Usage: 36.8 MB, less than 60.20% of JavaScript online submissions for Student Attendance Record I.

/*
 * @param {string} s
 * @return {boolean}
 */

var checkRecord = function (s) {
  if (s.indexOf('LLL') !== -1) return false;

  let countA = 0;

  for (let i = 0; i <= s.length; i++) {
    if (countA > 1) return false;
    if (s[i] === 'A') countA++;
  }

  return true;
};