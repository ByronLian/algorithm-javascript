// https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/
// Runtime: 68 ms, faster than 81.55% of JavaScript online submissions for Minimum Value to Get Positive Step by Step Sum.
// Memory Usage: 36.6 MB, less than 27.98% of JavaScript online submissions for Minimum Value to Get Positive Step by Step Sum.

/*
 * @param {number[]} nums
 * @return {number}
 */

var minStartValue = function (nums) {

  let startVal = 1;
  // 1. Find the last negative number
  // 2. Sum all value from first to last negative number
  // 3. If sum > 0 then start from 1
  // 4. If sum < 0 then start from 0 - sum
  // 5. Cut array, keep from first element to the element after last negative number
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i] < 0) {
      const idx = i;
      const temp = nums.filter((x, i) => i <= idx).reduce((acc, val) => acc + val);
      nums.splice(i + 1);
      startVal = temp > 0 ? startVal : 0 - temp;
      break;
    }
  }

  // Check if this start value is ok or not
  let flag = true;
  while (flag) {
    let total = startVal;

    for (let j = 0; j < nums.length; j++) {
      total += nums[j];
      if (total < 1) break;
      if (j === nums.length - 1 && total >= 0) flag = false;
    }

    if (flag === false) break;
    startVal++;
  }

  return startVal;
};