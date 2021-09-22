// https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/
// Runtime: 76 ms, faster than 52.70% of JavaScript online submissions for Average Salary Excluding the Minimum and Maximum Salary.
// Memory Usage: 36.6 MB, less than 20.20% of JavaScript online submissions for Average Salary Excluding the Minimum and Maximum Salary.

/*
 * @param {number[]} salary
 * @return {number}
 */

var average = function (salary) {
  let min = -Infinity;
  let max = Infinity;
  let result = 0;

  for (let i = 0; i < salary.length; i++) {
    result += salary[i];
    if (salary[i] < min) min = salary[i];
    if (salary[i] > max) max = salary[i];
  }

  return (result - max - min) / (salary.length - 2);
};
