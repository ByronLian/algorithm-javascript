// https://leetcode.com/problems/degree-of-an-array/

/*
 * @param {number[]} nums
 * @return {number}
 */

var findShortestSubArray = function (nums) {
  if (nums.length === 1) return 1;

  let map = {};
  let max = 0;
  let maxGroup = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]] += 1;
    } else {
      map[nums[i]] = 1;
    }

    if (map[nums[i]] > max) {
      max = map[nums[i]];
      maxGroup = {};
    }

    // Store right index
    if (map[nums[i]] === max) maxGroup[nums[i]] = i;
  }

  let min = Infinity;
  for (let item in maxGroup) {
    let target = parseInt(item);
    let leftIdx = nums.indexOf(target);
    let rightIdx = maxGroup[item];

    if (rightIdx - leftIdx + 1 < min) min = rightIdx - leftIdx + 1;
  }

  return min;
};
