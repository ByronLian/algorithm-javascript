// https://leetcode.com/problems/house-robber/
// Solution from: https://leetcode.com/problems/house-robber/discuss/491274/JavaScript-Solution

/*
 * @param {number[]} nums
 * @return {number}
 */

var rob = function (nums) {
  let memo = [];
  memo[0] = 0;
  memo[1] = nums[0];

  // Input [1,2,3,1]
  // memo
  // [ 0, 1 ]
  // [ 0, 1, 2 ]
  // [ 0, 1, 2, 4 ]
  for (let i = 1; i < nums.length; i++) {
    memo[i + 1] = Math.max(memo[i], memo[i - 1] + nums[i]);
  }

  return memo[nums.length];
};
