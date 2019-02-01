// https://leetcode.com/problems/number-of-1-bits/
// Runtime: 80 ms, faster than 100.00% of JavaScript online submissions for Number of 1 Bits.

/*
 * @param {number} n - a positive integer
 * @return {number}
 */

var hammingWeight = function (n) {
  const nString = n.toString(2);
  const nStringLen = nString.length;
  const halfLen = Math.floor(nString.length / 2);
  let count = 0;

  // Case 00000000....1
  if (halfLen < 1 && nString[0] === "1") return 1;

  // Other cases
  for (let i = 0; i < halfLen; i++) {
    if (nString[i] === "1") count++;
    if (nString[nStringLen - 1 - i] === "1") count++;
  }

  // If length is odd
  if (nStringLen % 2 !== 0 && nString[halfLen] === "1") count++;

  return count;
};