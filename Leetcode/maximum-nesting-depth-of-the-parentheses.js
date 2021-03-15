// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/
// Runtime: 76 ms, faster than 90.30% of JavaScript online submissions for Maximum Nesting Depth of the Parentheses.
// Memory Usage: 39.3 MB, less than 5.96% of JavaScript online submissions for Maximum Nesting Depth of the Parentheses.

/*
 * @param {string} s
 * @return {number}
 */

var maxDepth = function (s) {
  let max = 0;
  let temp = 0;
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
      temp += 1;
    } else if (s[i] === ")") {
      stack.pop();
      if (temp > max) max = temp;
      temp -= 1;
    }

    if (stack.length === 0) {
      if (temp > max) max = temp;
      temp = 0;
    }
  }

  return max;
};
