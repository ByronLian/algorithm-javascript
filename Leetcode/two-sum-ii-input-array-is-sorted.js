// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

/*
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (numbers, target) {
  const len = numbers.length;

  for (let j = 0; j < len; j++) {
    for (let k = j + 1; k < len; k++) {
      if (numbers[j] + numbers[k] > target) break;
      if (numbers[j] + numbers[k] === target) return [j + 1, k + 1];
    }
  }
};
