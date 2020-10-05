// https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/
// Runtime: 72 ms, faster than 83.61% of JavaScript online submissions for Generate a String With Characters That Have Odd Counts.
// Memory Usage: 40.6 MB, less than 5.02% of JavaScript online submissions for Generate a String With Characters That Have Odd Counts.

/*
 * @param {number} n
 * @return {string}
 */

var generateTheString = function (n) {
  let result = [];
  let oddNum = n % 2 === 0 ? n - 1 : n;

  for (let i = 0; i < oddNum; i++) {
    result[i] = "a";
  }

  if (oddNum !== n) result.push("b");

  return result.join("");
};
