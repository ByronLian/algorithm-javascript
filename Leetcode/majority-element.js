// https://leetcode.com/problems/majority-element/
// Runtime: 44 ms, faster than 99.93% of JavaScript online submissions for Majority Element.
// Memory Usage: 37.7 MB, less than 57.14% of JavaScript online submissions for Majority Element.

/*
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function (nums) {
  let obj = {};
  let max = 0;
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    // Store the key and value into obj
    let key = nums[i];
    if (obj[key]) {
      obj[key] = obj[key] + 1;
    } else {
      obj[key] = 1;
    }

    // Continue checking biggest key and value
    if (obj[key] > max) {
      max = obj[key];
      result = key;
    }

    // If element already pass the half length of array then we can say it's answer
    if (max > nums.length / 2) return result;
  }

  return result;
};
