// https://leetcode.com/problems/palindrome-number/
// Runtime: 272 ms, faster than 48.90% of JavaScript online submissions for Palindrome Number.

/*
 * @param {number} x
 * @return {boolean}
 */

// Solution
// 1. convert integer to string
// 2. compare the char of string from both left and right side
// 3. if any of them is not equals to each other then return false
// 4. if all of them are equal to each other after loop, then return true

var isPalindrome = function (x) {
  if (x < 0) return false;

  let xStr = x.toString();
  const xLen = xStr.length;
  const len = xLen / 2;

  for (let i = 0; i < len; i++) {
    let left = xStr[i];
    let right = xStr[xLen - i - 1];

    if (left !== right) return false;
  }

  return true;
};