// https://leetcode.com/problems/find-the-difference/
// Runtime: 76 ms, faster than 97.92% of JavaScript online submissions for Find the Difference.
// Memory Usage: 40.4 MB, less than 51.90% of JavaScript online submissions for Find the Difference.

/*
 * @param {string} s
 * @param {string} t
 * @return {character}
 */

var findTheDifference = function (s, t) {
  return String.fromCharCode(Math.abs(totalAsciiCount(s) - totalAsciiCount(t)));
};

const totalAsciiCount = (str) => {
  if (str === "") return 0;
  return str
    .split("")
    .map((word) => word.charCodeAt())
    .reduce((acc, val) => acc + val);
};
