// https://leetcode.com/problems/sqrtx/

/*
 * @param {number} x
 * @return {number}
 */

var mySqrt = function (x) {
  if (x === 0) return 0;

  let i = Math.floor(x / 2);
  while (true) {
    if (i * i <= x && (i + 1) * (i + 1) > x) {
      break;
    }
    if (i * i > x) {
      i = Math.floor(i / 2);
    } else {
      i++;
    }
  }

  return i;

  // return Math.floor(Math.sqrt(x));
  // get the mid of low and high is better than I did
};