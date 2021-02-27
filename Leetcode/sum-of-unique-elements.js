// https://leetcode.com/problems/sum-of-unique-elements/
// Runtime: 72 ms, faster than 96.09% of JavaScript online submissions for Sum of Unique Elements.
// Memory Usage: 38.6 MB, less than 81.66% of JavaScript online submissions for Sum of Unique Elements.

/*
 * @param {number[]} nums
 * @return {number}
 */

var sumOfUnique = function (nums) {
  let elements = new Map();
  let total = 0;

  // Build elements mapping
  for (let i = 0; i < nums.length; i++) {
    if (elements[nums[i]] === undefined) {
      elements[nums[i]] = 1;
    } else {
      elements[nums[i]] += 1;
    }
  }

  // Check and count those elements which has value 1
  for (let el in elements) {
    if (elements[el] === 1) total += parseInt(el);
  }

  return total;
};
