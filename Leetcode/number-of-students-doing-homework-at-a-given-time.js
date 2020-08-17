// https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/
// Runtime: 72 ms, faster than 68.12% of JavaScript online submissions for Number of Students Doing Homework at a Given Time.
// Memory Usage: 37 MB, less than 6.11% of JavaScript online submissions for Number of Students Doing Homework at a Given Time.

/*
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */

var busyStudent = function (startTime, endTime, queryTime) {
  let count = 0;

  for (let i = 0; i < startTime.length; i++) {
    if (endTime[i] >= queryTime && startTime[i] <= queryTime) count++;
  }

  return count;
};
