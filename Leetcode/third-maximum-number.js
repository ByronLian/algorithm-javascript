// https://leetcode.com/problems/third-maximum-number/
// Runtime: 72 ms, faster than 62.14% of JavaScript online submissions for Third Maximum Number.
// Memory Usage: 15.3 MB, less than 48.15% of JavaScript online submissions for Third Maximum Number.

/*
 * @param {number[]} nums
 * @return {number}
 */

var thirdMax = function (nums) {

  // Solution 
  // Go through array and re-arrange biggest, sec max and third max element in each loop
  // return biggest when there is no third max element
  
  const len = nums.length;
  const minimum = -Number.MAX_VALUE;
  let first = nums[0];
  let sec = minimum;
  let third = minimum;

  for (let i = 1; i < len; i++) {
    const current = nums[i];

    if (current === first || current === sec || current === third) continue;

    if (current > first) {
      third = sec;
      sec = first;
      first = current;
    } else {
      if (current > sec) {
        third = sec;
        sec = current;
      } else {
        if (current > third) third = current;
      }
    }
  }

  return third === minimum ? first : third;
};