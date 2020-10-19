// https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/
// Runtime: 92 ms, faster than 91.58% of JavaScript online submissions for Minimum Remove to Make Valid Parentheses.
// Memory Usage: 46.9 MB, less than 5.80% of JavaScript online submissions for Minimum Remove to Make Valid Parentheses.

/*
 * @param {string} s
 * @return {string}
 */

var minRemoveToMakeValid = function (s) {
  const len = s.length;

  // Find the target which need to be removed
  let stack = [];
  for (let i = 0; i < len; i++) {
    if (s[i] === "(" || s[i] === ")") {
      if (
        s[i] === ")" &&
        stack.length !== 0 &&
        stack[stack.length - 1][0] === "("
      ) {
        stack.pop();
      } else {
        stack.push([s[i], i]);
      }
    }
  }

  // Return origin s if there's no target
  if (stack.length === 0) return s;

  // Assemble string but skip target
  let result = "";
  let target = stack.shift();
  for (let j = 0; j < len; j++) {
    if (target !== undefined && j === target[1]) {
      target = stack.shift();
    } else {
      result += s[j];
    }

    // Enhancement when there's no more target from last string 
    if (target === undefined) return result + s.slice(j + 1, len);
  }

  return result;
};
