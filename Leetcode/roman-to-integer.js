// https://leetcode.com/problems/roman-to-integer/
// Runtime: 136 ms, faster than 84.67% of JavaScript online submissions for Roman to Integer.
// Memory Usage: 39.7 MB, less than 61.70% of JavaScript online submissions for Roman to Integer.

/*
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let sum = 0;
  let len = s.length;

  for (let i = 0; i < len; i++) {
    const s1 = romanMap[s[i]];
    const s2 = romanMap[s[i + 1]];

    // There's a case Like IV: 5-1 or IX = 10-1
    // so we need to check 2 numbers every time 
    if (s2 > s1) {
      sum += s2 - s1;
      i++
    } else {
      sum += s1;
    }
  }

  return sum;
};