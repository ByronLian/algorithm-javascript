// https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/
// Runtime: 72 ms, faster than 95.07% of JavaScript online submissions for Number of Students Unable to Eat Lunch.
// Memory Usage: 38.6 MB, less than 56.67% of JavaScript online submissions for Number of Students Unable to Eat Lunch.

/*
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */

var countStudents = function (students, sandwiches) {
  let noFoodCount = 0;

  while (noFoodCount !== students.length) {
    if (students[0] === sandwiches[0]) {
      students.shift();
      sandwiches.shift();
      noFoodCount = 0;
    } else {
      students.push(students.shift());
      noFoodCount += 1;
    }
  }

  return noFoodCount;
};
