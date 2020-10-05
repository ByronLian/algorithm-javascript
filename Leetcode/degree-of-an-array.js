// https://leetcode.com/problems/degree-of-an-array/

/*
 * @param {number[]} nums
 * @return {number}
 */

var findShortestSubArray = function (nums) {
  if (nums.length === 1) return 1;

  let map = {};
  let max = 0;
  let maxWithRightIdx = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]] += 1;
    } else {
      map[nums[i]] = 1;
    }

    if (map[nums[i]] > max) {
      max = map[nums[i]];
      maxWithRightIdx = {};
    }

    // Store right index
    if (map[nums[i]] === max) maxWithRightIdx[nums[i]] = i;
  }

  let min = Infinity;
  for (let item in maxWithRightIdx) {
    const target = parseInt(item);
    const leftIdx = nums.indexOf(target);
    const rightIdx = maxWithRightIdx[item];

    if (rightIdx - leftIdx + 1 < min) min = rightIdx - leftIdx + 1;
  }

  return min;
};
