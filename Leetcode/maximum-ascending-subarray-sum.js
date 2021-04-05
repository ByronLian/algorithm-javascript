// https://leetcode.com/problems/maximum-ascending-subarray-sum/
// Runtime: 68 ms, faster than 99.06% of JavaScript online submissions for Maximum Ascending Subarray Sum.
// Memory Usage: 38.7 MB, less than 41.25% of JavaScript online submissions for Maximum Ascending Subarray Sum.

/*
 * @param {number[]} nums
 * @return {number}
 */

var maxAscendingSum = function (nums) {
  let maximum = 0;
  let temp = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let pre = nums[i - 1];
    let now = nums[i];

    if (now > pre) {
      temp += now;
    } else {
      if (temp > maximum) maximum = temp;
      temp = now;
    }
  }

  return temp > maximum ? temp : maximum;
};
