// https://leetcode.com/problems/reverse-bits/
// Runtime: 88 ms, faster than 74.62% of JavaScript online submissions for Reverse Bits.
// Memory Usage: 39.2 MB, less than 5.10% of JavaScript online submissions for Reverse Bits.

/*
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */

var reverseBits = function (n) {
  let strN = n.toString("2");
  let preZeroNum = 32 - strN.length;
  let resultStr = "";

  for (let i = strN.length - 1; i >= 0; i--) {
    resultStr += strN[i];
  }

  for (let j = 0; j < preZeroNum; j++) {
    resultStr += "0";
  }

  return parseInt(resultStr, 2);
};
