// https://leetcode.com/problems/employee-importance/

/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/*
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */

var GetImportance = function (employees, id) {
  let map = {};
  employees.forEach((employee, i) => (map[employee.id] = i));

  let traverse = (i = map[id]) => {
    let sum = employees[i].importance;

    for (let j of employees[i].subordinates) {
      sum += traverse(map[j]);
    }
    return sum;
  };

  return traverse();
};
