// https://leetcode.com/problems/make-the-string-great/
// Runtime: 76 ms, faster than 98.11% of JavaScript online submissions for Make The String Great.
// Memory Usage: 38.7 MB, less than 63.61% of JavaScript online submissions for Make The String Great.

/*
 * @param {string} s
 * @return {string}
 */

var makeGood = function (s) {
  let flag = true;

  while (flag) {
    let count = 0;

    for (let i = 0; i < s.length - 1; i++) {
      if (Math.abs(s[i].charCodeAt() - s[i + 1].charCodeAt()) === 32) {
        s = s.slice(0, i) + s.slice(i + 2);
        count++;
      }
    }
    if (count === 0) flag = false;
  }

  return s;
};
