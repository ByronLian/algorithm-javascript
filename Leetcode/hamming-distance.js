// https://leetcode.com/problems/hamming-distance/
// Runtime: 72 ms, faster than 94.29% of JavaScript online submissions for Hamming Distance.

/*
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

var hammingDistance = function (x, y) {
  let xBinary = x.toString(2); // Turn to binary (only can be use when value bigger than or 0)
  let yBinary = y.toString(2); // Turn to binary (only can be use when value bigger than or 0)
  let count = 0;               // Count how many different place
  let len = xBinary.length;
  const xLength = xBinary.length;
  const yLength = yBinary.length;

  // Find the biggest len of two variable
  // Append 0 to the shorter one to make sure both variables have same length
  // e.g
  // x = 1, y = 4
  // x to binary = 1
  // y to binary = 100
  // append "00" to x
  // x = 001
  if (xLength > yLength) {
    len = xLength;
    yBinary = yBinary.padStart(len, "0");
  } else {
    len = yLength;
    xBinary = xBinary.padStart(len, "0");
  }

  // Check how many different place
  for (let i = len - 1; i >= 0; i--) {
    if (xBinary[i] !== yBinary[i]) {
      count++;
    }
  }

  return count;
};