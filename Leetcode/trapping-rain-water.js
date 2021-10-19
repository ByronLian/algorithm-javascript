// https://leetcode.com/problems/trapping-rain-water
// Runtime: 72 ms, faster than 96.69% of JavaScript online submissions for Trapping Rain Water.
// Memory Usage: 41.1 MB, less than 22.46% of JavaScript online submissions for Trapping Rain Water.

/*
 * @param {number[]} height
 * @return {number}
 */

var trap = function (height) {
  const len = height.length;
  if (len < 2) return 0;

  let leftPointer = 0;
  let rightPointer = len - 1;
  let maxLeft = height[leftPointer];
  let maxRight = height[rightPointer];
  let count = 0;

  while (leftPointer < rightPointer) {
    if (maxLeft < maxRight) {
      leftPointer += 1;
      maxLeft = Math.max(maxLeft, height[leftPointer]);
      count += maxLeft - height[leftPointer];
    } else {
      rightPointer -= 1;
      maxRight = Math.max(maxRight, height[rightPointer]);
      count += maxRight - height[rightPointer];
    }
  }

  return count;
};