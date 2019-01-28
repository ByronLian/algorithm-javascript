// https://leetcode.com/problems/reverse-integer/
// Runtime: 96 ms, faster than 46.57% of JavaScript online submissions for Reverse Integer.

/*
 * @param {number} x
 * @return {number}
 */

var reverse = function (x) {
  // The max value rule
  const MAX_VALUE = Math.pow(2, 31);
  
  // Solution
  // 1. convert int to string
  const str = Math.abs(x).toString();
  let result = "";

  // 2. add char into new string from last element of old one
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  // 3. check the number is positive or negative
  if (x < 0) {
    result = 0 - parseInt(result);
  } else {
    result = parseInt(result);
  }

  return (result < -MAX_VALUE || result > MAX_VALUE) ? 0 : result;
};