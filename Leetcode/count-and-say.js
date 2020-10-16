// https://leetcode.com/problems/count-and-say/
// Runtime: 76 ms, faster than 78.63% of JavaScript online submissions for Count and Say.
// Memory Usage: 40.8 MB, less than 17.44% of JavaScript online submissions for Count and Say.

/*
 * @param {number} n
 * @return {string}
 */

var countAndSay = function (n) {
  let result = "1";

  // Do count and say action until reach n times
  for (let i = 1; i < n; i++) {
    let tmp = "";
    let count = 1;
    let target = result[0];

    // Count and say
    for (let j = 1; j <= result.length; j++) {
      if (result[j] === target) {
        count++;
      } else {
        tmp += count + target;
        target = result[j];
        count = 1;
      }
    }

    result = tmp;
    tmp = "";
  }

  return result;
};
