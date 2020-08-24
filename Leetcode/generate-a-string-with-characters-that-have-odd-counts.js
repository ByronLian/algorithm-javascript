// https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/

/*
 * @param {number} n
 * @return {string}
 */

var generateTheString = function (n) {
  let result = new Array(n - 1).fill(0);
  let oddNum = n % 2 === 0 ? n - 1 : n;

  for (let i = 0; i < oddNum; i++) {
    result[i] = "a";
  }

  if (oddNum !== n) result.push("b");

  return result.join("");
};
