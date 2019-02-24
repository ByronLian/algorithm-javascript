// https://leetcode.com/problems/set-mismatch/
// Runtime: 100 ms, faster than 43.17% of JavaScript online submissions for Set Mismatch.
// Memory Usage: 37.8 MB, less than 25.00% of JavaScript online submissions for Set Mismatch.

/*
 * @param {number[]} nums
 * @return {number[]}
 */

var findErrorNums = function (nums) {
  const len = nums.length;

  nums.sort(function (a, b) {
    return a - b;
  });

  let duplicateVal = 0;
  let lostVal = 0;

  // Case when lost value is 1
  if (nums[0] !== 1) {
    lostVal = 1;
  }

  // Compare sorted elements and find the lost and duplicate element
  for (let i = 0; i < len - 1; i++) {
    const currentVal = nums[i];
    const nextVal = nums[i + 1];

    if (nextVal - currentVal > 1) {
      lostVal = nextVal - 1;
      if (duplicateVal !== 0) break;
    }

    if (currentVal === nextVal) {
      duplicateVal = nums[i];
      if (lostVal !== 0) break;
    }
  }

  // Case when lost value is biggest value + 1
  if (lostVal === 0 && nums[0] === 1) {
    lostVal = nums[len - 1] + 1;
  }

  return [duplicateVal, lostVal];
}