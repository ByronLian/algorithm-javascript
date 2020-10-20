// https://leetcode.com/problems/maximum-average-subarray-i/
// Runtime: 92 ms, faster than 95.83% of JavaScript online submissions for Maximum Average Subarray I.
// Memory Usage: 47.6 MB, less than 7.08% of JavaScript online submissions for Maximum Average Subarray I.

/*
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findMaxAverage = function (nums, k) {
  let maxAvg = -Infinity;
  let prevVal = 0;
  let nextVal = 0;
  let tmp = 0;

  for (let i = 0; i + k <= nums.length; i++) {
    if (i === 0) {
      // We only do the loop for first time
      for (let j = i; j < i + k; j++) {
        tmp += nums[j];
      }
      // Save previous value and next value
      prevVal = nums[i + 1];
      nextVal = nums[i + k];
    } else {
      // After first loop we just simply remove previous value and add next value
      prevVal = nums[i - 1];
      // Save previous value and next value
      nextVal = nums[i + k - 1];
      tmp = tmp - prevVal + nextVal;
    }

    if (tmp / k > maxAvg) maxAvg = tmp / k;
  }

  return maxAvg;
};
