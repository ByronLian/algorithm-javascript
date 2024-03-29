// https://leetcode.com/problems/maximum-product-subarray/
// Runtime: 80 ms, faster than 85.05% of JavaScript online submissions for Maximum Product Subarray.
// Memory Usage: 42.7 MB, less than 5.46% of JavaScript online submissions for Maximum Product Subarray.

/*
 * @param {number[]} nums
 * @return {number}
 */

var maxProduct = function (nums) {
  let min = nums[0];
  let max = nums[0];
  let result =numsA[0];

  for (let i = 1; i < nums.length; ++i) {
    // Case 1: Positive
    // Case 2: 0
    // Case 3: Negative
    const next = [max * nums[i], nums[i], min * nums[i]];
    min = Math.min(...next);
    max = Math.max(...next);

    result = Math.max(result, max);
  }

  return result;
};

// var maxProduct = function(nums) {
//   if(nums.length === 0) return 0;
  
//   let currentMax = nums[0];
//   let currentMin = nums[0];
//   let result = currentMax;
  
//   for(let i=1; i<nums.length; i++) {
//       const currentEl = nums[i];
      
//       let tempMax = Math.max(currentEl, Math.max(currentMax * currentEl, currentMin * currentEl));
//       currentMin = Math.min(currentEl, Math.min(currentMax * currentEl, currentMin * currentEl));
//       currentMax = tempMax;

//       result = Math.max(currentMax, result);
//   }
  
//   return result;
// };