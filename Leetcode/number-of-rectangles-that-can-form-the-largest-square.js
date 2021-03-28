// https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/
// Runtime: 76 ms, faster than 98.75% of JavaScript online submissions for Number Of Rectangles That Can Form The Largest Square.
// Memory Usage: 41 MB, less than 93.74% of JavaScript online submissions for Number Of Rectangles That Can Form The Largest Square.

/*
 * @param {number[][]} rectangles
 * @return {number}
 */

var countGoodRectangles = function (rectangles) {
  let max = 0;
  let counter = 0;

  for (let i = 0; i < rectangles.length; i++) {
    let min = Math.min(...rectangles[i]);
    if (min > max) {
      max = min;
      counter = 1;
    } else if (max === min) {
      counter += 1;
    }
  }

  return counter;
};
