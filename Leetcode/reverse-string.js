// https://leetcode.com/problems/reverse-string/
// Runtime: 148 ms, faster than 96.89% of JavaScript online submissions for Reverse String.

/*
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

var reverseString = function (s) {
  const len = s.length;
  const halfLen = Math.floor(len / 2);

  // Solution 
  // use temp space and swap elements
  // e.g ["h", "e", "l", "l", "o"]
  // loop 1: swap "h" and "o"
  // loop 2: swap "e" and "l"
  // return result
  
  for (let i = 0; i < halfLen; i++) {
    let temp = s[i];
    s[i] = s[len - 1 - i];
    s[len - 1 - i] = temp;
  }

  return s;
};